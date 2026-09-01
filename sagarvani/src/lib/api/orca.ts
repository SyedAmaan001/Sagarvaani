const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";
const API_KEY = process.env.NEXT_PUBLIC_SAGARVANI_API_KEY || "";

export async function queryOrca(query: string) {
  const res = await fetch(`${BACKEND_URL}/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": API_KEY,
    },
    body: JSON.stringify({ query }),
  });

  if (res.status === 401 || res.status === 403) {
    throw new Error("ORCA API: Unauthorized. Check X-API-Key.");
  }
  if (!res.ok) {
    throw new Error(`ORCA API error: ${res.status}`);
  }

  return res.json();
}

export async function checkHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${BACKEND_URL}/health`);
    return res.ok;
  } catch {
    return false;
  }
}
