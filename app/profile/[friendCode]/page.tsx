import {notFound} from "next/navigation";
import {getPublicProfile, type ModpackRef} from "@/lib/public-api";

function humanizePrompt(promptId: string): string {
    return promptId
        .replace(/[_.]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

function StatusMessage({title, detail}: { title: string; detail: string }) {
    return (
        <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
            <h1 className="text-xl font-semibold text-white">{title}</h1>
            <p className="mt-2 max-w-sm text-sm text-slate-400">{detail}</p>
        </main>
    );
}

function ModpackLine({label, pack}: { label: string; pack: ModpackRef }) {
    return (
        <div className="flex items-baseline justify-between gap-3 py-1">
            <span className="text-xs uppercase tracking-wider text-slate-500">{label}</span>
            <span className="truncate text-sm text-slate-200">{pack.name}</span>
        </div>
    );
}

export default async function ProfilePage({params}: { params: Promise<{ friendCode: string }> }) {
    const {friendCode} = await params;
    const result = await getPublicProfile(friendCode);

    if (!result.ok) {
        if (result.reason === "unavailable") {
            return (
                <StatusMessage
                    title="Profiles are unavailable"
                    detail="The LAN+ backend is not reaching right now."
                />
            );
        }
        notFound();
    }

    const profile = result.data;
    const links = Object.entries(profile.links ?? {}).filter((entry): entry is [string, string] => Boolean(entry[1]));
    const prompts = Object.entries(profile.prompts ?? {});

    return (
        <main className="mx-auto max-w-2xl px-4 py-16">
            <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
                <div className="h-20 bg-[#A070F0]/20"/>

                <div className="px-6 pb-6">
                    <div className="-mt-10 mb-4 flex items-end gap-4">
                        <div
                            className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-slate-900 bg-slate-800 text-3xl font-bold text-[#A070F0]">
                            {profile.username.charAt(0).toUpperCase()}
                        </div>
                        <div className="pb-1">
                            <h1 className="text-2xl font-bold text-white">{profile.username}</h1>
                            <p className="font-mono text-sm text-[#BEE85A]">{profile.friendCode}</p>
                        </div>
                    </div>

                    {profile.pronouns && (
                        <span
                            className="inline-block rounded-full border border-slate-700 px-3 py-0.5 text-xs text-slate-300">
                            {profile.pronouns}
                        </span>
                    )}

                    {profile.bio && (
                        <p className="mt-4 text-sm leading-relaxed text-slate-300">{profile.bio}</p>
                    )}

                    {links.length > 0 && (
                        <section className="mt-6">
                            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Links</h2>
                            <ul className="flex flex-wrap gap-2">
                                {links.map(([platform, value]) => (
                                    <li key={platform}
                                        className="rounded-lg border border-slate-800 bg-slate-800/60 px-3 py-1 text-sm text-slate-200">
                                        <span className="text-slate-500">{platform}: </span>
                                        {value}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {(profile.favorite || profile.currentlyPlaying || profile.recentlyPlayed || profile.lastPlayed) && (
                        <section className="mt-6 border-t border-slate-800 pt-4">
                            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Modpacks</h2>
                            {profile.favorite && <ModpackLine label="Favorite" pack={profile.favorite}/>}
                            {profile.currentlyPlaying &&
                                <ModpackLine label="Playing" pack={profile.currentlyPlaying}/>}
                            {profile.recentlyPlayed && <ModpackLine label="Recent" pack={profile.recentlyPlayed}/>}
                            {profile.lastPlayed && <ModpackLine label="Last played" pack={profile.lastPlayed}/>}
                        </section>
                    )}

                    {prompts.length > 0 && (
                        <section className="mt-6 border-t border-slate-800 pt-4">
                            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">About</h2>
                            <ul className="space-y-3">
                                {prompts.map(([promptId, answer]) => (
                                    <li key={promptId}>
                                        <p className="text-xs text-slate-500">{humanizePrompt(promptId)}</p>
                                        <p className="text-sm text-slate-200">{answer}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </article>

            <p className="mt-6 text-center text-xs text-slate-600">
                <span className="text-[#A070F0]">LAN</span>
                <span className="text-[#BEE85A]">+</span> public profile
            </p>
        </main>
    );
}