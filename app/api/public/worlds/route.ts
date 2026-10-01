const TIMEOUT_MS = 4000;

export async function GET() {
    const baseUrl = process.env.LANPLUS_PUBLIC_API_URL;
    if (!baseUrl) {
        return Response.json({error: "unavailable"}, {status: 503});
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
        const response = await fetch(`${baseUrl.replace(/\/+$/, "")}/public/worlds`, {
            cache: "no-store",
            headers: {accept: "application/json"},
            signal: controller.signal,
        });

        if (!response.ok) {
            return Response.json({error: "unavailable"}, {status: 503});
        }

        const worlds: unknown = await response.json();
        if (!Array.isArray(worlds)) {
            return Response.json({error: "invalid_response"}, {status: 502});
        }

        return Response.json(worlds, {
            headers: {"cache-control": "no-store"},
        });
    } catch {
        return Response.json({error: "unavailable"}, {status: 503});
    } finally {
        clearTimeout(timeout);
    }
}