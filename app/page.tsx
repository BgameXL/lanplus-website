import Image from "next/image";
import mascot from "@/assets/lanplus_mascot.png"

export default function Home() {
    return (
        <div className="min-h-screen">
            <div className="relative overflow-hidden py-24 bg-slate-950 sm:py-32 ">
                <div
                    className="absolute -top-24 left-1/2 -z-10 h-125 w-200 -translate-x-1/2 mask-[radius(50%)] bg-blue-600/20 blur-3xl"/>
                <div
                    className="absolute -bottom-24 right-1/2 -z-10 h-125 w-200 -translate-x-1/2 mask-[radius(50%)] bg-purple-600/20 blur-3xl"/>

                <div className="mx-auto max-w-7xl px-19 lg:px-8 z-10">
                    <h1 className="text-center text-1xl font-extrabold tracking-tight text-white sm:text-9xl">
                        <span className="text-brand-lavender">Lan<span className="text-brand-lime">+</span></span>
                    </h1>
                    <p className="mt-6 text-center text-lg leading-5 text-slate-300">
                        The best world social mod. Take this essential mod!
                    </p>
                </div>
                <Image src={mascot} alt="mascot" className="absolute top-4 right-1/3 w-300"/>
            </div>

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

        </div>
    );
}
