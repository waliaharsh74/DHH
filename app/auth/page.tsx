
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]/route"
import ClientSignIn from "./ClientSign"
import { redirect } from "next/navigation"

export default async function SignIn() {
    const session = await getServerSession(authOptions)
    if (session) {
        redirect('/')
    }
    return (
        <>
            <ClientSignIn session={session} />
        </>
    )
}

