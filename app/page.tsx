import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation'
import LoginBtn from "./Components/LoginBtn"


export default async function Home() {
  const session = await getServerSession()
  if (!session) {
    redirect('http://localhost:3000/api/auth/signin')
  }

  return (

    <div className="">

      <main id="main-content" className="flex-1 relative ">


        <div
          id="6b287909-c0a4-44a1-9c92-4ebfe6566d71"
          data-section_id="6b287909-c0a4-44a1-9c92-4ebfe6566d71"
          className=" sectionCode"
        >
          <>
            <div id="root">



            </div>
          </>
        </div>

        <div
          id="60564623-8fc9-4622-95af-0a9326ca1b84"
          data-section_id="60564623-8fc9-4622-95af-0a9326ca1b84"
          className="page_sectionHighlight__ahPeD sectionCode"
        >
          <>
            <div id="root">
              <section id="hero" className="bg-neutral-900 min-h-[70vh] ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-8 animate__animated animate__fadeInLeft">
                      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                        Your DHH Vibe, Your Tribe
                      </h1>
                      <p className="text-gray-300 text-xl">
                        Drop in, tune up, and connect with fellow DHH enthusiasts. Share your thoughts, discover new tracks, and dive deep into the culture.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <button className="bg-purple-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition-all duration-300 animate__animated animate__pulse animate__infinite">
                          Start Vibing
                        </button>
                        <button className="border-2 border-purple-500 text-purple-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                          Explore Trivia
                        </button>
                      </div>
                      <div className="flex items-center gap-4 text-gray-400">
                        <div className="flex -space-x-4">
                          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">🎧</div>
                          <div className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center">🎵</div>
                          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">🎤</div>
                        </div>
                        <p>Join 10k+ music enthusiasts</p>
                      </div>
                    </div>

                    <div className="relative animate__animated animate__fadeInRight">
                      <div className="w-full h-[500px] bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-xl p-6">
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full blur-2xl opacity-50"></div>
                        <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-pink-500 rounded-full blur-2xl opacity-50"></div>
                        <div className="relative h-full border-2 border-gray-700 rounded-xl bg-neutral-900/50 p-4">
                          <div className="space-y-4">
                            <div className="flex items-center gap-4 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
                              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">🎵</div>
                              <div>
                                <h3 className="text-white font-semibold">Latest Tracks</h3>
                                <p className="text-gray-400 text-sm">Discover new releases</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
                              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">💬</div>
                              <div>
                                <h3 className="text-white font-semibold">Live Discussions</h3>
                                <p className="text-gray-400 text-sm">Join the conversation</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
                              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">🎯</div>
                              <div>
                                <h3 className="text-white font-semibold">DHH Trivia</h3>
                                <p className="text-gray-400 text-sm">Test your knowledge</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        </div>

        <div
          id="e255c53d-0f77-40d6-907d-153ffa7ba73d"
          data-section_id="e255c53d-0f77-40d6-907d-153ffa7ba73d"
          className="page_sectionHighlight__ahPeD sectionCode"
        >
          <>
            <div id="root">
              <section id="musicPlayer" className="bg-neutral-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-white mb-4">Drop Your Beat</h2>
                    <p className="text-gray-400">Curate your perfect DHH playlist and vibe with the community</p>
                  </div>

                  <div className="bg-neutral-900 rounded-2xl p-6 max-w-3xl mx-auto shadow-2xl animate__animated animate__fadeInUp">
                    <div className="flex flex-col space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">🎵</span>
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">Currently Playing</h3>
                            <p className="text-gray-400 text-sm">Select a track to play</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <button className="text-gray-400 hover:text-purple-500 transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button id="playPauseBtn" className="bg-purple-500 rounded-full p-3 hover:bg-purple-600 transition-colors">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                          </button>
                          <button className="text-gray-400 hover:text-purple-500 transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="relative">
                          <div className="h-2 bg-neutral-700 rounded-full">
                            <div className="h-full w-1/3 bg-purple-500 rounded-full"></div>
                            <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
                          </div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>1:23</span>
                          <span>3:45</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <span className="text-purple-500">01</span>
                            <div>
                              <h4 className="text-white">Track Name 1</h4>
                              <p className="text-gray-400 text-sm">Artist Name</p>
                            </div>
                          </div>
                          <span className="text-gray-400">3:45</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <span className="text-purple-500">02</span>
                            <div>
                              <h4 className="text-white">Track Name 2</h4>
                              <p className="text-gray-400 text-sm">Artist Name</p>
                            </div>
                          </div>
                          <span className="text-gray-400">4:20</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <span className="text-purple-500">03</span>
                            <div>
                              <h4 className="text-white">Track Name 3</h4>
                              <p className="text-gray-400 text-sm">Artist Name</p>
                            </div>
                          </div>
                          <span className="text-gray-400">3:55</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


            </div>
          </>
        </div>

        <div
          id="1ca03209-9e67-438b-a17b-a97d6a69bee5"
          data-section_id="1ca03209-9e67-438b-a17b-a97d6a69bee5"
          className="page_sectionHighlight__ahPeD sectionCode"
        >
          <>
            <div id="root">
              <section id="trendingTracks" className="bg-neutral-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold text-white animate__animated animate__fadeIn">Trending Now 🔥</h2>
                    <div className="flex gap-4">
                      <button id="prevBtn" className="p-2 rounded-full bg-neutral-800 text-white hover:bg-purple-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button id="nextBtn" className="p-2 rounded-full bg-neutral-800 text-white hover:bg-purple-500 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="overflow-hidden">
                    <div id="trackSlider" className="flex gap-6 transition-transform duration-300">
                      <div className="min-w-[300px] bg-neutral-800 rounded-xl p-4 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeIn">
                        <div className="aspect-square bg-purple-500 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-4xl">🎵</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-white font-semibold">Track Name</h3>
                            <p className="text-gray-400 text-sm">Artist Name</p>
                          </div>
                          <button className="bg-purple-500 rounded-full p-2 hover:bg-purple-600 transition-colors">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                          </button>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            15.2K
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            2.1K
                          </span>
                        </div>
                      </div>

                      <div className="min-w-[300px] bg-neutral-800 rounded-xl p-4 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeIn">
                        <div className="aspect-square bg-pink-500 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-4xl">🎵</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-white font-semibold">Track Name</h3>
                            <p className="text-gray-400 text-sm">Artist Name</p>
                          </div>
                          <button className="bg-purple-500 rounded-full p-2 hover:bg-purple-600 transition-colors">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                          </button>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            12.8K
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            1.8K
                          </span>
                        </div>
                      </div>

                      <div className="min-w-[300px] bg-neutral-800 rounded-xl p-4 hover:bg-neutral-700 transition-all duration-300 animate__animated animate__fadeIn">
                        <div className="aspect-square bg-blue-500 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-4xl">🎵</span>
                        </div>
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-white font-semibold">Track Name</h3>
                            <p className="text-gray-400 text-sm">Artist Name</p>
                          </div>
                          <button className="bg-purple-500 rounded-full p-2 hover:bg-purple-600 transition-colors">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                          </button>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            10.5K
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            1.5K
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


            </div>
          </>
        </div>

        <div
          id="2d689589-e09c-49f6-a252-1a7471d08ede"
          data-section_id="2d689589-e09c-49f6-a252-1a7471d08ede"
          className="page_sectionHighlight__ahPeD sectionCode"
        >
          <>
            <div id="root">
              <section id="communityFeed" className="bg-neutral-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-white mb-4">Community Vibes</h2>
                    <p className="text-gray-400">Join the conversation with fellow DHH enthusiasts</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeInUp">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          VS
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">VibeSeeker</h3>
                          <p className="text-gray-400 text-sm">2 hours ago</p>
                        </div>
                        <button className="ml-auto text-purple-500 hover:text-purple-400">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-300 mb-4">This new track is straight fire! 🔥 Who else is vibing to it? #DHHVibes</p>
                      <div className="bg-neutral-800 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between text-gray-400 text-sm">
                          <span>Now Playing</span>
                          <span>3:45</span>
                        </div>
                        <div className="h-1 bg-neutral-700 rounded-full mt-2">
                          <div className="h-full w-1/2 bg-purple-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-gray-400 text-sm">
                        <div className="flex gap-4">
                          <button className="flex items-center gap-2 hover:text-purple-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            2.5K
                          </button>
                          <button className="flex items-center gap-2 hover:text-purple-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            856
                          </button>
                        </div>
                        <button className="hover:text-purple-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeInUp delay-200"  >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                          DH
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">DHHLover</h3>
                          <p className="text-gray-400 text-sm">5 hours ago</p>
                        </div>
                        <button className="ml-auto text-purple-500 hover:text-purple-400">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-300 mb-4">Did you know? This artist started their journey from the streets of Delhi! 🎤 #DHHTrivia</p>
                      <div className="bg-neutral-800 rounded-lg p-4 mb-4">
                        <div className="text-white font-semibold mb-2">Today's Trivia</div>
                        <p className="text-gray-400 text-sm">Click to learn more about the artist's journey...</p>
                      </div>
                      <div className="flex items-center justify-between text-gray-400 text-sm">
                        <div className="flex gap-4">
                          <button className="flex items-center gap-2 hover:text-purple-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            1.8K
                          </button>
                          <button className="flex items-center gap-2 hover:text-purple-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            642
                          </button>
                        </div>
                        <button className="hover:text-purple-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeInUp delay-400" >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          BF
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">BeatFlow</h3>
                          <p className="text-gray-400 text-sm">8 hours ago</p>
                        </div>
                        <button className="ml-auto text-purple-500 hover:text-purple-400">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-300 mb-4">Made a fresh playlist for the weekend! Check it out fam 🎧 #WeekendVibes</p>
                      <div className="bg-neutral-800 rounded-lg p-4 mb-4">
                        <div className="text-white font-semibold mb-2">Weekend Playlist</div>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span>12 tracks</span>
                          <span>45 min</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-gray-400 text-sm">
                        <div className="flex gap-4">
                          <button className="flex items-center gap-2 hover:text-purple-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            3.2K
                          </button>
                          <button className="flex items-center gap-2 hover:text-purple-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            928
                          </button>
                        </div>
                        <button className="hover:text-purple-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        </div>

        <div
          id="22873771-c57c-4b3f-b0f9-3239c203de86"
          data-section_id="22873771-c57c-4b3f-b0f9-3239c203de86"
          className="page_sectionHighlight__ahPeD sectionCode"
        >
          <>
            <div id="root">
              <section id="artistTrivia" className="bg-neutral-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-white mb-4">DHH Trivia Time 🎯</h2>
                    <p className="text-gray-400">Test your knowledge about your favorite artists</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="space-y-6">

                      <div className="bg-neutral-800 rounded-xl p-6 border-2 border-purple-500 animate__animated animate__fadeInLeft">
                        <div className="flex justify-between items-center mb-4">
                          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Question 1/5</span>
                          <span className="text-purple-500">Points: 500</span>
                        </div>
                        <h3 className="text-white text-xl font-bold mb-4">Which artist started their journey from the streets of Mumbai in 2007?</h3>
                        <div className="space-y-3">
                          <button className="w-full text-left p-4 rounded-lg bg-neutral-700 text-white hover:bg-purple-500 transition-colors duration-300">
                            A. Artist Name 1
                          </button>
                          <button className="w-full text-left p-4 rounded-lg bg-neutral-700 text-white hover:bg-purple-500 transition-colors duration-300">
                            B. Artist Name 2
                          </button>
                          <button className="w-full text-left p-4 rounded-lg bg-neutral-700 text-white hover:bg-purple-500 transition-colors duration-300">
                            C. Artist Name 3
                          </button>
                          <button className="w-full text-left p-4 rounded-lg bg-neutral-700 text-white hover:bg-purple-500 transition-colors duration-300">
                            D. Artist Name 4
                          </button>
                        </div>
                      </div>

                      {/* <!-- Timer and Progress --> */}
                      <div className="bg-neutral-800 rounded-xl p-6 animate__animated animate__fadeInLeft delay-200" >
                        <div className="flex justify-between items-center mb-4">
                          <div className="text-white font-bold">Time Remaining</div>
                          <div className="text-purple-500 text-xl font-bold" id="timer">0:30</div>
                        </div>
                        <div className="w-full bg-neutral-700 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full w-[60%]"></div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Leaderboard --> */}
                    <div className="bg-neutral-800 rounded-xl p-6 animate__animated animate__fadeInRight">
                      <h3 className="text-white text-xl font-bold mb-6">Trivia Champions 👑</h3>
                      <div className="space-y-4">
                        {/* <!-- Top Player --> */}
                        <div className="flex items-center bg-neutral-700 rounded-lg p-4">
                          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                            1
                          </div>
                          <div className="ml-4">
                            <h4 className="text-white font-semibold">TriviaMaster</h4>
                            <p className="text-gray-400 text-sm">2500 points</p>
                          </div>
                          <div className="ml-auto">
                            <span className="bg-purple-500/20 text-purple-500 px-3 py-1 rounded-full text-sm">
                              Win Streak: 5
                            </span>
                          </div>
                        </div>


                        <div className="flex items-center bg-neutral-700 rounded-lg p-4">
                          <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                            2
                          </div>
                          <div className="ml-4">
                            <h4 className="text-white font-semibold">DHHPro</h4>
                            <p className="text-gray-400 text-sm">2100 points</p>
                          </div>
                          <div className="ml-auto">
                            <span className="bg-purple-500/20 text-purple-500 px-3 py-1 rounded-full text-sm">
                              Win Streak: 3
                            </span>
                          </div>
                        </div>


                        <div className="flex items-center bg-neutral-700 rounded-lg p-4">
                          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                            3
                          </div>
                          <div className="ml-4">
                            <h4 className="text-white font-semibold">BeatMaster</h4>
                            <p className="text-gray-400 text-sm">1800 points</p>
                          </div>
                          <div className="ml-auto">
                            <span className="bg-purple-500/20 text-purple-500 px-3 py-1 rounded-full text-sm">
                              Win Streak: 2
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                          Start New Game
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>


            </div>
          </>
        </div>

        <div
          id="62200e2a-4dff-4933-a71a-edff4b72a2b7"
          data-section_id="62200e2a-4dff-4933-a71a-edff4b72a2b7"
          className="page_sectionHighlight__ahPeD sectionCode"
        >
          <>
            <div id="root">
              <section id="discussionForums" className="bg-neutral-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-white mb-4">Join the Conversation 💭</h2>
                    <p className="text-gray-400">Dive into hot discussions about DHH</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Active Discussions --> */}
                    <div className="lg:col-span-2 space-y-6">

                      <div className="bg-neutral-900 rounded-xl p-6 hover:border-purple-500 border-2 border-transparent transition-all duration-300 animate__animated animate__fadeInUp">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                              TH
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">Top Hits 2024</h3>
                              <p className="text-gray-400 text-sm">Started by @MusicGuru</p>
                            </div>
                          </div>
                          <span className="bg-purple-500/20 text-purple-500 px-3 py-1 rounded-full text-sm">Hot 🔥</span>
                        </div>
                        <p className="text-gray-300 mb-4">What's your pick for the best DHH track of 2024 so far? Drop your top 3!</p>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex space-x-4">
                            <span className="flex items-center space-x-1">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                              <span>156 replies</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <span>2.3K views</span>
                            </span>
                          </div>
                          <span>2 hours ago</span>
                        </div>
                      </div>


                      <div className="bg-neutral-900 rounded-xl p-6 hover:border-purple-500 border-2 border-transparent transition-all duration-300 animate__animated animate__fadeInUp delay-200" >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                              BT
                            </div>
                            <div>
                              <h3 className="text-white font-semibold">Beat Breakdown</h3>
                              <p className="text-gray-400 text-sm">Started by @ProducerPro</p>
                            </div>
                          </div>
                          <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-sm">New ✨</span>
                        </div>
                        <p className="text-gray-300 mb-4">Let's analyze the production in the latest drops. Those 808s are hitting different!</p>
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <div className="flex space-x-4">
                            <span className="flex items-center space-x-1">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                              <span>89 replies</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              <span>1.5K views</span>
                            </span>
                          </div>
                          <span>5 hours ago</span>
                        </div>
                      </div>
                    </div>


                    <div className="space-y-6">
                      <div className="bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeInRight">
                        <h3 className="text-white font-bold mb-4">Popular Categories</h3>
                        <div className="space-y-3">
                          <a href="#" className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                            <span className="text-white">Music Reviews</span>
                            <span className="bg-purple-500/20 text-purple-500 px-2 py-1 rounded-full text-sm">128</span>
                          </a>
                          <a href="#" className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                            <span className="text-white">Artist Spotlights</span>
                            <span className="bg-purple-500/20 text-purple-500 px-2 py-1 rounded-full text-sm">95</span>
                          </a>
                          <a href="#" className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                            <span className="text-white">Beat Production</span>
                            <span className="bg-purple-500/20 text-purple-500 px-2 py-1 rounded-full text-sm">76</span>
                          </a>
                          <a href="#" className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                            <span className="text-white">Lyrics Analysis</span>
                            <span className="bg-purple-500/20 text-purple-500 px-2 py-1 rounded-full text-sm">64</span>
                          </a>
                        </div>
                      </div>


                      <div className="bg-neutral-900 rounded-xl p-6 animate__animated animate__fadeInRight delay-200" >
                        <h3 className="text-white font-bold mb-4">Start a Discussion</h3>
                        <div className="space-y-4">
                          <input type="text" placeholder="Discussion Title" className="w-full bg-neutral-800 border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500" />
                          <textarea placeholder="What's on your mind?" className="w-full bg-neutral-800 border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 h-32"></textarea>
                          <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors">
                            Post Discussion
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        </div>

        <div
          id="bce5f46b-551d-40a7-8766-b2d8767b30e0"
          data-section_id="bce5f46b-551d-40a7-8766-b2d8767b30e0"
          className="page_sectionHighlight__ahPeD sectionCode"
        >
          <>
            <div id="root">
              <section id="eventSpotlight" className="bg-neutral-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12 animate__animated animate__fadeIn">
                    <h2 className="text-4xl font-bold text-white mb-4">Upcoming Events 🎪</h2>
                    <p className="text-gray-400">Don't miss out on the hottest DHH gatherings</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-neutral-800 rounded-xl overflow-hidden group animate__animated animate__fadeInUp">
                      <div className="h-48 bg-purple-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-purple-300 text-sm">Friday, March 15</p>
                              <h3 className="text-white text-xl font-bold">DHH Cypher Night</h3>
                            </div>
                            <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">Live</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Mumbai, India</span>
                        </div>
                        <div className="space-y-4">
                          <p className="text-gray-300">Join the biggest names in DHH for an epic night of freestyle battles and live performances!</p>
                          <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors">
                            Get Tickets
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-neutral-800 rounded-xl overflow-hidden group animate__animated animate__fadeInUp delay-200">
                      <div className="h-48 bg-pink-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-pink-300 text-sm">Saturday, March 23</p>
                              <h3 className="text-white text-xl font-bold">Beat Production Workshop</h3>
                            </div>
                            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">Workshop</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Delhi, India</span>
                        </div>
                        <div className="space-y-4">
                          <p className="text-gray-300">Learn the art of beat-making from industry professionals in this hands-on workshop.</p>
                          <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors">
                            Register Now
                          </button>
                        </div>
                      </div>
                    </div>


                    <div className="bg-neutral-800 rounded-xl overflow-hidden group animate__animated animate__fadeInUp delay-200">
                      <div className="h-48 bg-blue-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-blue-300 text-sm">Sunday, March 31</p>
                              <h3 className="text-white text-xl font-bold">DHH Fan Meetup</h3>
                            </div>
                            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Community</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Bangalore, India</span>
                        </div>
                        <div className="space-y-4">
                          <p className="text-gray-300">Connect with fellow DHH enthusiasts, share stories, and celebrate the culture together!</p>
                          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
                            Join Meetup
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <button className="bg-neutral-800 text-white px-8 py-3 rounded-full hover:bg-neutral-700 transition-colors inline-flex items-center gap-2">
                      View All Events
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </>
        </div>

        <div
          id="e51c10d1-bd07-4777-8667-505098d92a69"
          data-section_id="e51c10d1-bd07-4777-8667-505098d92a69"
          className="page_sectionHighlight__ahPeD sectionCode"
        >
          <>
            <div id="root">
              <footer id="footer" className="bg-neutral-900 pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-6">
                      <h1 className="text-purple-500 font-bold text-3xl">DHHVibes</h1>
                      <p className="text-gray-400">Your ultimate destination for everything DHH. Connect, vibe, and grow with the community.</p>
                      <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                      <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Discover Music</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Artist Trivia</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Events</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Community</a></li>
                      </ul>
                    </div>


                    <div>
                      <h3 className="text-white font-semibold mb-4">Support</h3>
                      <ul className="space-y-3">
                        <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Help Center</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">Contact Us</a></li>
                      </ul>
                    </div>


                    <div>
                      <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
                      <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and exclusive content.</p>
                      <form className="space-y-3">
                        <input type="email" placeholder="Enter your email" className="w-full bg-neutral-800 border-0 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500" />
                        <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-colors">
                          Subscribe
                        </button>
                      </form>
                    </div>
                  </div>


                  <div className="border-t border-neutral-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <p className="text-gray-400 text-sm">© 2024 DHHVibes. All rights reserved.</p>
                      <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors text-sm">Terms</a>
                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors text-sm">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors text-sm">Cookies</a>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </>
        </div>


      </main>




    </div>
  );
}
