import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getDb } from "./db";
import type { Interest, LeadPayload } from "./lead";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  interest: Interest;
  comment: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  referrer: string | null;
  landing_page: string | null;
  created_at: string;
};

const FALLBACK_DIR = path.join(process.cwd(), ".data");
const FALLBACK_FILE = path.join(FALLBACK_DIR, "leads.json");

let tableReady: Promise<void> | null = null;

function ensureTable() {
  const db = getDb();
  if (!db) return Promise.resolve();

  if (!tableReady) {
    tableReady = db
      .execute(
        `CREATE TABLE IF NOT EXISTS leads (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          phone TEXT NOT NULL,
          interest TEXT NOT NULL,
          comment TEXT,
          utm_source TEXT,
          utm_medium TEXT,
          utm_campaign TEXT,
          utm_content TEXT,
          utm_term TEXT,
          referrer TEXT,
          landing_page TEXT,
          created_at TEXT NOT NULL
        )`,
      )
      .then(() =>
        db.execute(
          "CREATE INDEX IF NOT EXISTS idx_leads_phone_created_at ON leads (phone, created_at)",
        ),
      )
      .then(() => undefined);
  }

  return tableReady;
}

function buildLead(input: LeadPayload): Lead {
  return {
    id: randomUUID(),
    name: input.name,
    phone: input.phone,
    interest: input.interest,
    comment: input.comment ?? null,
    utm_source: input.utm_source ?? null,
    utm_medium: input.utm_medium ?? null,
    utm_campaign: input.utm_campaign ?? null,
    utm_content: input.utm_content ?? null,
    utm_term: input.utm_term ?? null,
    referrer: input.referrer ?? null,
    landing_page: input.landing_page ?? null,
    created_at: new Date().toISOString(),
  };
}

async function readJsonLeads(): Promise<Lead[]> {
  try {
    const raw = await readFile(FALLBACK_FILE, "utf8");
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

async function saveToJson(lead: Lead): Promise<void> {
  await mkdir(FALLBACK_DIR, { recursive: true });
  const leads = await readJsonLeads();
  leads.push(lead);
  await writeFile(FALLBACK_FILE, `${JSON.stringify(leads, null, 2)}\n`, "utf8");
}

async function findInJson(phone: string, since: string): Promise<Lead | null> {
  const leads = await readJsonLeads();
  return leads.find((l) => l.phone === phone && l.created_at >= since) ?? null;
}

export async function saveLead(input: LeadPayload): Promise<Lead> {
  const lead = buildLead(input);
  const db = getDb();

  if (db) {
    await ensureTable();
    await db.execute({
      sql: `INSERT INTO leads (
              id, name, phone, interest, comment,
              utm_source, utm_medium, utm_campaign, utm_content, utm_term,
              referrer, landing_page, created_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      args: [
        lead.id,
        lead.name,
        lead.phone,
        lead.interest,
        lead.comment,
        lead.utm_source,
        lead.utm_medium,
        lead.utm_campaign,
        lead.utm_content,
        lead.utm_term,
        lead.referrer,
        lead.landing_page,
        lead.created_at,
      ],
    });
    return lead;
  }

  await saveToJson(lead);
  return lead;
}

export async function findRecentByPhone(
  phone: string,
  windowMs: number,
): Promise<Lead | null> {
  const since = new Date(Date.now() - windowMs).toISOString();
  const db = getDb();

  if (db) {
    await ensureTable();
    const res = await db.execute({
      sql: "SELECT * FROM leads WHERE phone = ? AND created_at >= ? LIMIT 1",
      args: [phone, since],
    });
    const row = res.rows[0];
    return row ? (row as unknown as Lead) : null;
  }

  return findInJson(phone, since);
}
