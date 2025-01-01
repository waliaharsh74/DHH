"use client"
import { useSession, signIn, signOut, SessionProvider } from "next-auth/react"


export function Component() {
    const { data: session } = useSession()
    if (session) {
        return (

            <button onClick={() => signOut()}>Sign out</button>

        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}
export default function App() {
    return (
        <SessionProvider >
            <Component />
        </SessionProvider>
    )
}

