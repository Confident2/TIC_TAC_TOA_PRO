import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import Game from "./components/Game";
import SignInButton from "./components/signIn-button";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Tic Tac Toe</h1>
          {session ? (
            <div className="flex items-center gap-2">
              <span className="text-gray-700">Welcome, {session.user?.name}</span>
              <img 
                src={session.user?.image || ''} 
                alt="User avatar" 
                className="w-8 h-8 rounded-full"
              />
            </div>
          ) : (
            <SignInButton />
          )}
        </header>
        
        <Game />
      </div>
    </main>
  );
}