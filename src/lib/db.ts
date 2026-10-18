import { createClient } from "@libsql/client";

let client: ReturnType<typeof createClient> | null = null;

export function getDb(): ReturnType<typeof createClient> | null {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;
  if (!url || !authToken) return null;

  if (!client) {
    client = createClient({ url, authToken });
  }

  return client;
}
