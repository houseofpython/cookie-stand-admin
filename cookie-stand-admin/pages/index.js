import Image from 'next/image'
import React, { useState } from 'react';
import  { Inter } from '@next/font/google'
import Header from '../components/header.js'
import Main  from '../components/main.js'
import Footer from '../components/footer.js'
import Head from '../components/head.js'
import LoginForm from '../components/login.js'
import { useAuth } from '../contexts/auth.js';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, login } = useAuth();

  const [username, setUsername] = useState(false)

  const handleLogin = (username, password) => {
    setUsername(username)
    login(username, password);
  };

  return (
    <>
       <Head />
       <Header />
       {user ?
                <Main />
                :
                <LoginForm onLogin={handleLogin} />
            }
       <Footer />
    </>

  )
}
