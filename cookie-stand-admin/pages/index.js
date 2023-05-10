import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="">
            <header className="flex items-center justify-between p-4 bg-green-500 text-black">
                <h1 className="text-4xl">Cookie Stand Admin</h1>
            </header>
            <main className="flex-grow">
                <div className="px-2 py-1 bg-green-500 text-black m-20 rounded-lg">
                <h1 className="text-3xl text-center"> Create Cookie Stand </h1>
                <form onSubmit='' className="flex w-1/2 p-2 mx-auto my-4 bg-green-200">
                        <label>Location</label>
                        <input name="question" className="flex-auto pl-1" />
                    </form>
                    <div className="inline-grid">
                    <form onSubmit='' className="flex w-1/2 p-2 mx-auto my-4 bg-green-200">
                        <label>Minimum Customers per Hour</label>
                        <input name="question" className="flex-auto pl-1" />
                    </form>
                    <form onSubmit='' className="flex w-1/2 p-2 mx-auto my-4 bg-gray-200">
                        <label>Maximum Customers per Hour</label>
                        <input name="question" className="flex-auto pl-1" />
                    </form>
                    <form onSubmit='' className="flex w-1/2 p-2 mx-auto my-4 bg-gray-200">
                    <label>Average Cookies per Sale</label>
                        <input name="question" className="flex-auto pl-1" />
                    </form>
                    <button className="px-2 py-1 bg-green-700 text-black">Create</button>
                    </div>
                </div>
                    <p className="px-2 py-1 text-black text-center">Report Table Coming Soon....</p>


            </main>

            <footer className="py-4 bg-green-500 text-black">
                <nav>
                    {/* will build out careers page soon */}
                    <a href="careers">  ⓒ 2023</a>
                </nav>
            </footer>
        </div>
  )
}
