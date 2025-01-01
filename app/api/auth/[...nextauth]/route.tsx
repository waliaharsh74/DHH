import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import SpotifyProvider from "next-auth/providers/spotify";

const authOptions = {

    providers: [


        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!
        })
    ],
    secret: process.env.NEXTAUTH_SECRET!

}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }