import react from 'react'


export default function Footer({stores}){
    return(
          <footer className="py-4 bg-green-500 text-black">
                <nav>
                    {/* will build out careers page soon */}
                    <a href="careers"> {stores} Locations World Wide </a>
                </nav>
           </footer>
   )
}
