"use client"
import axios from 'axios';
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react';



const SearchDataProvider = () => {
    const { data: session } = useSession();

    console.log(process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!);

    const [search, setSearch] = useState('');
    const [result, setResult] = useState({})
    const fetchData = async () => {
        const formData = new URLSearchParams();
        formData.append('grant_type', 'client_credentials');
        formData.append('client_id', ``);
        formData.append('client_secret', ``);
        const response = await axios.post('https://accounts.spotify.com/api/token', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const token = response?.data.access_token
        // console.log("res", response)

        const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
            params: {
                q: search,
                type: 'artist'
            }, headers: { Authorization: `Bearer ${token}` }
        },)
        setResult(data);
        console.log(result);
    }
    useEffect(() => {
        fetchData()
    }, [search])
    return (
        <div>
            <div className="w-full max-w-3xl mx-auto mb-12 animate__animated animate__slideUp opacity-100 transform translate-y-0 transition duration-600 ease-out visibility-visible" >
                <div className="relative">
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} id="artist-search" placeholder="Search for artists..." className="w-full px-6 py-4 bg-neutral-800 border-2 border-violet-500 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-violet-600 transition-all" />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-violet-500 hover:bg-violet-600 text-white px-8 py-3 rounded-full transition-colors">
                        Search
                    </button>
                </div>
            </div>
            {/* {result && JSON.stringify(result)} */}


            {/* <div className="flex flex-wrap justify-center gap-3 mb-12 animate__animated animate__fadeIn opacity-100 translate-y-0 transition-all duration-600 ease-out visibility-visible" >
                <span className="px-4 py-2 bg-neutral-800 rounded-full text-sm hover:bg-violet-500 cursor-pointer transition-colors">#HipHop</span>
                <span className="px-4 py-2 bg-neutral-800 rounded-full text-sm hover:bg-violet-500 cursor-pointer transition-colors">#Rap</span>
                <span className="px-4 py-2 bg-neutral-800 rounded-full text-sm hover:bg-violet-500 cursor-pointer transition-colors">#Beats</span>
                <span className="px-4 py-2 bg-neutral-800 rounded-full text-sm hover:bg-violet-500 cursor-pointer transition-colors">#Underground</span>
                <span className="px-4 py-2 bg-neutral-800 rounded-full text-sm hover:bg-violet-500 cursor-pointer transition-colors">#NewSchool</span>
            </div>


            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate__animated animate__fadeIn " >
                <div className="p-4">
                    <div className="text-3xl font-bold text-violet-500 mb-2">1M+</div>
                    <div className="text-neutral-400">Artists</div>
                </div>
                <div className="p-4">
                    <div className="text-3xl font-bold text-violet-500 mb-2">50M+</div>
                    <div className="text-neutral-400">Tracks</div>
                </div>
                <div className="p-4">
                    <div className="text-3xl font-bold text-violet-500 mb-2">10M+</div>
                    <div className="text-neutral-400">Users</div>
                </div>
                <div className="p-4">
                    <div className="text-3xl font-bold text-violet-500 mb-2">100K+</div>
                    <div className="text-neutral-400">Daily Posts</div>
                </div>
            </div> */}

            {/* <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 animate__animated animate__fadeIn visibility-visible opacity-100" >
                        Top Result
                    </h2>
                    <p className="text-neutral-400 text-lg animate__animated animate__fadeIn visibility-visible opacity-100" >Deep dive into the artist's world</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative animate__animated animate__slideLeft visibility-visible opacity-100" >
                        <div className="aspect-ratio-portrait bg-neutral-800 rounded-2xl overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                            <div className="flex space-x-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-violet-500">2.5M</div>
                                    <div className="text-sm text-white">Monthly Listeners</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-violet-500">12</div>
                                    <div className="text-sm text-white">Albums</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-violet-500">180</div>
                                    <div className="text-sm text-white">Shows</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 animate__animated animate__slideRight visibility-visible opacity-100">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4">Metro Boomin</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                Legendary producer and artist known for shaping the modern sound of hip-hop. His innovative approach to beat-making has influenced a generation of musicians.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white">Latest Releases</h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-4 bg-neutral-800 p-4 rounded-lg">
                                    <div className="w-12 h-12 bg-neutral-700 rounded-md"></div>
                                    <div>
                                        <h5 className="text-white font-medium">Heroes &amp; Villains</h5>
                                        <p className="text-neutral-400 text-sm">Album • 2023</p>
                                    </div>
                                    <button className="ml-auto p-2 text-violet-500 hover:text-violet-400">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <span className="px-4 py-2 bg-neutral-800 rounded-full text-white text-sm hover:bg-violet-500 transition-colors cursor-pointer">#Producer</span>
                            <span className="px-4 py-2 bg-neutral-800 rounded-full text-white text-sm hover:bg-violet-500 transition-colors cursor-pointer">#TrapMusic</span>
                            <span className="px-4 py-2 bg-neutral-800 rounded-full text-white text-sm hover:bg-violet-500 transition-colors cursor-pointer">#HipHop</span>
                            <span className="px-4 py-2 bg-neutral-800 rounded-full text-white text-sm hover:bg-violet-500 transition-colors cursor-pointer">#BeatMaker</span>
                        </div>


                        <div className="flex space-x-4">
                            <button className="flex-1 bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 px-6 rounded-full transition-colors">
                                Follow Artist
                            </button>
                            <button className="flex-1 border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white font-semibold py-3 px-6 rounded-full transition-colors">
                                Share Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
const SearchData = () => {
    return (
        <SessionProvider>
            <SearchDataProvider />
        </SessionProvider>
    );
}
export default SearchData
