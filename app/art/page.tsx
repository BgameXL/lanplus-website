const galleryAreas: any[] = [];

export default function ArtPage() {
    return (
        <main className="min-h-screen bg-[#0A0C10] text-[#F4F1FA]">
            <section className="mx-auto max-w-6xl px-5 pb-12 pt-16 sm:px-8 sm:pt-24">
                <div className="grid gap-8 border-b border-slate-800 pb-12 md:grid-cols-12 md:items-end">
                    <div className="md:col-span-8">
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#BEE85A]">
                            Community gallery
                        </p>
                        <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-7xl">
                            Art made around LAN+
                        </h1>
                    </div>
                </div>
            </section>

            <section aria-labelledby="gallery-heading" className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
                <h2 id="gallery-heading" className="text-lg font-semibold tracking-tight">
                    Gallery preview
                </h2>
                <div>
                </div>
            </section>

            <section className="border-y border-slate-800 bg-[#151821]">
                <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-8 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-8">
                        <p className="font-mono text-xs uppercase tracking-[0.2em]">Want your work
                            here?</p>
                        <h2 className="mt-3 text-3xl font-bold tracking-tight">Community submissions are coming
                            later.</h2>
                    </div>
                </div>
            </section>
        </main>
    );
}