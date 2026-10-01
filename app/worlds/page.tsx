"use client";
import {useEffect, useState} from "react";

type PublicWorld = {
    name: string;
    owner: string;
    modpackId: string | null;
    gameMode: string | null;
    difficulty: string | null;
};

type LoadState = "loading" | "ready" | "error";

function isPublicWorld(value: unknown): value is PublicWorld {
    if (!value || typeof value !== "object") {
        return false;
    }

    const world = value as Record<string, unknown>;
    return typeof world.name === "string"
        && typeof world.owner === "string"
        && (typeof world.modpackId === "string" || world.modpackId === null)
        && (typeof world.gameMode === "string" || world.gameMode === null)
        && (typeof world.difficulty === "string" || world.difficulty === null);
}

export default function WorldPage() {
    const [worlds, setWorlds] = useState<PublicWorld[]>([]);
    const [loadState, setLoadState] = useState<LoadState>("loading");

    useEffect(() => {
        let active = true;

        const fetchWorlds = async () => {
            try {
                const response = await fetch("/api/public/worlds", {cache: "no-store"});
                if (!response.ok) {
                    throw new Error("Failed to fetch worlds");
                }

                const body: unknown = await response.json();
                if (!Array.isArray(body) || !body.every(isPublicWorld)) {
                    throw new Error("Invalid worlds response");
                }

                if (active) {
                    setWorlds(body);
                    setLoadState("ready");
                }
            } catch {
                if (active) {
                    setLoadState("error");
                }
            }
        };

        const initialRequest = window.setTimeout(fetchWorlds, 0);
        const refreshInterval = window.setInterval(fetchWorlds, 30000);

        return () => {
            active = false;
            window.clearTimeout(initialRequest);
            window.clearInterval(refreshInterval);
        };
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Active Worlds</h1>
            <div className="grid gap-4">
                {loadState === "loading" && (
                    <p className="text-slate-500 italic">Loading worlds...</p>
                )}
                {loadState === "error" && (
                    <p className="text-slate-500">Worlds are unavailable right now.</p>
                )}
                {loadState === "ready" && worlds.length === 0 && (
                    <p className="text-slate-500 italic">No public worlds are active.</p>
                )}
                {loadState === "ready" && worlds.length > 0 && (
                    worlds.map((world) => (
                        <div key={`${world.owner}:${world.name}`}
                             className="p-4 bg-slate-800 border border-slate-700 rounded">
                            <h2 className="font-bold text-xl">{world.name}</h2>
                            <p className="text-sm text-slate-400">Hosted by {world.owner}</p>
                            {(world.modpackId || world.gameMode || world.difficulty) && (
                                <p className="mt-2 text-xs text-slate-500">
                                    {[world.modpackId, world.gameMode, world.difficulty].filter(Boolean).join(" · ")}
                                </p>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}