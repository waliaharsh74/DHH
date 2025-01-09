// types/next-auth.d.ts
import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        accessToken?: string; // Attach accessToken to session type
    }


    interface User {
        accessToken?: string
    }
}
