import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions = {

    providers: [


        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!
        })
    ],
    secret: process.env.NEXTAUTH_SECRET!,
    pages: {
        signIn: '/auth',
        signOut: '/auth',
    }

}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }