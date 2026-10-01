import {redirect} from "next/navigation";

type ProfileSearchParams = Promise<{
    friendCode?: string | string[];
}>;

export default async function ProfileLookupPage({searchParams}: { searchParams: ProfileSearchParams }) {
    const requestedCode = (await searchParams).friendCode;
    const friendCode = typeof requestedCode === "string" ? requestedCode.trim().toUpperCase() : "";
    const isValidCode = /^LAN-[A-Z0-9]{5}$/.test(friendCode);

    if (isValidCode) {
        redirect(`/profile/${encodeURIComponent(friendCode)}`);
    }

    return (
        <main className="mx-auto max-w-2xl items-center px-5 py-60">
            <div className="grid w-full gap-10 border-y border-slate-800 py-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
                <section>
                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-400">
                        Enter a friend code to open the profile.
                    </p>
                </section>

                <form action="/profile" method="get" className="border border-slate-700 bg-slate-950 p-5 sm:p-6">
                    <label htmlFor="friendCode" className="block text-sm font-semibold text-slate-200">
                        Friend code
                    </label>
                    <p id="friend-code-hint" className="mt-1 text-xs text-slate-500">
                        Format: LAN- followed by five letters or numbers.
                    </p>
                    <input
                        id="friendCode"
                        name="friendCode"
                        type="text"
                        inputMode="text"
                        autoComplete="off"
                        spellCheck={false}
                        required
                        pattern="LAN-[A-Za-z0-9]{5}"
                        placeholder="LAN-7K2QF"
                        defaultValue={friendCode}
                        aria-describedby={friendCode ? "friend-code-hint friend-code-error" : "friend-code-hint"}
                        aria-invalid={friendCode ? !isValidCode : undefined}
                        className="mt-4 w-full border border-slate-700 bg-slate-900 px-4 py-3 font-mono text-base uppercase text-white outline-none transition-colors focus:ring-2 focus:ring-[#A070F0]/25"
                    />
                    {friendCode && !isValidCode && (
                        <p id="friend-code-error" role="alert" className="mt-2 text-sm text-rose-300">
                            That friend code does not have the expected format.
                        </p>
                    )}
                    <button
                        type="submit"
                        className="mt-4 w-full bg-[#BEE85A] px-4 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-[#d0f67a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#BEE85A]"
                    >
                        Open profile
                    </button>
                </form>
            </div>
        </main>
    );
}