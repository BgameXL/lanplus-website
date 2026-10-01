export type SkinRef = {
    type: string;
    id: string;
    hash: string | null;
    model: string | null;
};

export type ModpackRef = {
    modpackId: string;
    name: string;
    downloadUrl: string | null;
};

export type PublicProfile = {
    username: string;
    friendCode: string;
    bio: string | null;
    pronouns: string | null;
    skin: SkinRef | null;
    links: Record<string, string | null>;
    prompts: Record<string, string>;
    favorite: ModpackRef | null;
    currentlyPlaying: ModpackRef | null;
    lastPlayed: ModpackRef | null;
    recentlyPlayed: ModpackRef | null;
};

export type PublicApiError = "not_found" | "unavailable" | "bad_request";

export type PublicApiResult<T> =
    | { ok: true; data: T }
    | { ok: false; reason: PublicApiError };

const FRIEND_CODE = /^LAN-[A-Z0-9]{5}$/;
const TIMEOUT_MS = 4000;
const REVALIDATE_SECONDS = 60;

export function normalizeFriendCode(raw: string): string | null {
    const value = decodeURIComponent(raw).trim().toUpperCase();
    return FRIEND_CODE.test(value) ? value : null;
}

export async function getPublicProfile(
    rawFriendCode: string,
): Promise<PublicApiResult<PublicProfile>> {
    const friendCode = normalizeFriendCode(rawFriendCode);
    if (!friendCode) {
        return {ok: false, reason: "bad_request"};
    }

    const base = process.env.LANPLUS_PUBLIC_API_URL;
    if (!base) {
        return {ok: false, reason: "unavailable"};
    }

    const url = `${base.replace(/\/+$/, "")}/public/profile/${encodeURIComponent(friendCode)}`;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
        const res = await fetch(url, {
            signal: controller.signal,
            headers: {accept: "application/json"},
            next: {revalidate: REVALIDATE_SECONDS},
        });

        if (res.status === 404) {
            return {ok: false, reason: "not_found"};
        }
        if (!res.ok) {
            return {ok: false, reason: "unavailable"};
        }

        const data = (await res.json()) as PublicProfile;
        return {ok: true, data};
    } catch {
        return {ok: false, reason: "unavailable"};
    } finally {
        clearTimeout(timeout);
    }
}