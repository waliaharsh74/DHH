// app/signin/ClientSignIn.tsx
"use client"

import { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

interface ClientSignInProps {
    session: any;
}

export default function ClientSignIn({ session }: ClientSignInProps) {
    const [providers, setProviders] = useState<Record<string, Provider> | null>(null);

    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();
            setProviders(res);
        };
        fetchProviders();
    }, []);

    if (!providers) return <div>Loading...</div>;

    return (
        <div>
            {Object.values(providers).map((provider) => (
                <div key={provider.id}>
                    <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    );
}
