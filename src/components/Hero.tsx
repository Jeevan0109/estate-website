import { SearchForm } from "./SearchForm";

export function Hero() {
    return (
        <div className="min-h-screen hero flex justify-center items-center">
         <div className="max-w-4xl flex flex-col gap-6  items-center pb-4 ">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold sm:text-4xl lg:text-6xl text-white text-center">Easy way to Find Your Dream Home</h1>
                <p className="text-slate-300 text-center">A Great platform to buy, sell and rent your  properties without any agent or commissions.</p>
            </div>
            {/* Our Search From Here  */}
            <SearchForm/>
         </div>   
        </div>
    );
}