import { MapPin } from "lucide-react";

export function Footer(){
    return (
        <footer className="pt-10 bg-slate-800 text-white">
            <div className=" container flex flex-col  sm:flex-row justify-between gap-6">
                <div>
                    <p className="text-lg font-semibold ">Estate</p>
                    <p className="max-w-lg mt-1 text-slate-300 font-semibold">A great platform to buy, sell and rent your properties without any agent or commision</p>
                </div>

                <div>
                    <p className="text-lg font-semibold">Contact</p>
                    <address className="text-slate-300 mt-1">
                        <MapPin className="inline-block w-5 h-5 mt-0.5"/>
                        135 Walnut St,
                        <br/> Yet Another City, USA
                    </address>
                </div>
            </div>
            <p className="pt-20 pb-4 text-center text-slate-400">&copy Estate. Design with by the Rudra Services.</p>
        </footer>
    )
}