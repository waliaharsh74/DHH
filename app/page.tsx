import { getServerSession } from "next-auth/next";
import { redirect } from 'next/navigation'
import LoginBtn from "./Components/LoginBtn"


export default async function Home() {
  const session = await getServerSession()
  if (!session) {
    redirect('http://localhost:3000/api/auth/signin')
  }

  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {JSON.stringify(session)}
      <LoginBtn></LoginBtn>



    </div>
  );
}
