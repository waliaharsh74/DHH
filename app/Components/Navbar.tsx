import { getServerSession } from "next-auth/next";

export async function Navbar() {
    const session = await getServerSession()

    return (
        <nav id="navbar" className="bg-neutral-900  w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="text-purple-500 font-bold text-2xl">DHHVibes</h1>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Home</a>
                            <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Discover</a>
                            <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Artists</a>
                            <a href="#" className="text-gray-300 hover:text-purple-500 transition-colors duration-300">Trivia</a>
                            <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300 animate__animated animate__pulse animate__infinite">{session?.user?.name} </button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button id="hamburger" className="text-gray-300 hover:text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <div id="mobileMenu" className="hidden md:hidden bg-neutral-900">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="text-gray-300 hover:text-purple-500 block px-3 py-2 text-base">Home</a>
                    <a href="#" className="text-gray-300 hover:text-purple-500 block px-3 py-2 text-base">Discover</a>
                    <a href="#" className="text-gray-300 hover:text-purple-500 block px-3 py-2 text-base">Artists</a>
                    <a href="#" className="text-gray-300 hover:text-purple-500 block px-3 py-2 text-base">Trivia</a>
                    <button className="w-full bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300 mt-4">Join Now</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar