import react from 'react'
import { useAuth } from '../contexts/auth.js'

export default function Header() {
    const { user, logout } = useAuth();
    return(
        <>
            <header className="flex items-center justify-between p-4 bg-green-500 text-black">
                    <h1 className="text-4xl">Cookie Stand Admin</h1>
                    <button type="submit" className="bg-white text-black rounded-lg">Overview</button>
                    <button type="submit" className="bg-white text-black rounded-lg" onClick={logout}>Logout</button>
            </header>

        </>

   )
}

