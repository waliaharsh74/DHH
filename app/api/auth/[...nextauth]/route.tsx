import { randomBytes, randomUUID } from "crypto";
import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { JWT } from "next-auth/jwt";

interface CustomToken extends JWT {
    accessToken?: string;
}

export const authOptions: NextAuthOptions = {

    providers: [


        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!
        })
    ],

    callbacks: {
        async jwt({ token, account, }) {
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token }) {
            if (session && token) {
                session.accessToken = (token as CustomToken).accessToken;
            }
            return session;
        },


    },

    secret: process.env.NEXTAUTH_SECRET!,
    pages: {
        signIn: '/auth',
        signOut: '/auth',
    }

}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }