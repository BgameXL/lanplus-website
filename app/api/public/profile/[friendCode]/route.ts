import {getPublicProfile} from "@/lib/public-api";

export async function GET(
    _request: Request,
    {params}: { params: Promise<{ friendCode: string }> },
) {
    const {friendCode} = await params;
    const result = await getPublicProfile(friendCode);

    if (!result.ok) {
        if (result.reason === "unavailable") {
            return Response.json({error: "unavailable"}, {status: 503});
        }
        return Response.json({error: "not_found"}, {status: 404});
    }

    return Response.json(result.data, {
        status: 200,
        headers: {
            "cache-control": "public, max-age=60, stale-while-revalidate=300",
        },
    });
}