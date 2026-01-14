'use client';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <Head>
        <title>MLSA IIIT Dharwad</title>
        <meta name="description" content="Microsoft Learn Student Ambassadors IIIT Dharwad Chapter" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </Head>

      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}