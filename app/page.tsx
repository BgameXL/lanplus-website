export default function Home() {
    return (
        <div className="min-h-screen">
            {}
            <header className="relative overflow-hidden bg-slate-950 py-24 sm:py-32">
                {}
                <div
                    className="absolute -top-24 left-1/2 -z-10 h-125 w-200 -translate-x-1/2 mask-[radius(50%)] bg-blue-600/20 blur-3xl"/>
                <div
                    className="absolute -bottom-24 right-1/2 -z-10 h-125 w-200 -translate-x-1/2 mask-[radius(50%)] bg-purple-600/20 blur-3xl"/>

                <div className="mx-auto max-w-7xl px-19 lg:px-8">
                    <h1 className="text-center text-1xl font-extrabold tracking-tight text-white sm:text-7xl">
                        Welcome To <span className="bg-linear-to-r">Lan+</span>
                    </h1>
                    <p className="mt-6 text-center text-lg leading-5 text-slate-300">
                        The best world social mod. Take this essential mod!
                    </p>
                    <div className="mt-10 flex justify-center gap-x-6">
                        <button
                            className="squarefull bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition-all">
                            Explore
                        </button>
                        <button
                            className="squarefull bg-slate-800 px-8 py-3 text-sm font-semibold text-white border border-slate-700 hover:bg-slate-700 transition-all">
                            See Latest
                        </button>
                    </div>
                </div>
            </header>

            <section className="py-24 bg-slate-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            What can you find in Lan+?
                        </h2>
                        <p className="mt-4 text-slate-400"></p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div
                            className="square-2xl border border-slate-800 bg-slate-900/50 p-8 transition-transform hover:-translate-y-2">
                            <div>

                            </div>
                            <h3 className="text-xl font-semibold text-white">Show off your art!</h3>
                            <p className="mt-2 text-slate-400 text-sm">
                            </p>
                        </div>

                        <div
                            className="square-2xl border border-slate-800 bg-slate-900/50 p-8 transition-transform hover:-translate-y-2">
                            <div>

                            </div>
                            <h3 className="text-xl font-semibold text-white">Community</h3>
                            <p className="text-slate-400 text-sm">
                            </p>
                        </div>

                        <div
                            className="square-2xl border border-slate-800 bg-slate-900/50 p-8 transition-transform hover:-translate-y-2">
                            <div>

                            </div>
                            <h3 className="text-xl font-semibold text-white">Hide your IP</h3>
                            <p className="text-slate-400 text-sm">
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 py-12 border-t border-slate-900 text-center">
                <p className="text-slate-500 text-sm">
                    Made for the Lan+ community.
                </p>
            </section>
            efe
        </div>
    );
}