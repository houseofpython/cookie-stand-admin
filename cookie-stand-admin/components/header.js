import react from 'react'

export default function Header() {
    return(
        <>
            <header className="flex items-center justify-between p-4 bg-green-500 text-black">
                    <h1 className="text-4xl">Cookie Stand Admin</h1>
                    <button type="submit" className="bg-white text-black rounded-lg">Overview</button>
            </header>

        </>

   )
}

