import Image from 'next/image'
import  { Inter } from 'next/font/google'
import Header from '../components/header.js'
import Main  from '../components/main.js'
import Footer from '../components/footer.js'
import Head from '../components/head.js'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
       <Head />
       <Header  />
       <Main />
       <Footer />
    </>

  )
}
