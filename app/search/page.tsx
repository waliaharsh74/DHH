import SearchData from "../Components/SearchData";

export default async function Search() {
    return (
        <div className="flex flex-col items-center justify-center pt-20 pb-16">

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-center mb-8 animate__animated animate__fadeIn opacity-100 transform translate-y-0 transition duration-600 ease-out visibility-visible">
                Find Your <span className="text-violet-500">Favorite</span> Artists
            </h1>
            <SearchData />



        </div>
    )
}