import Head from 'next/head'

import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {

  return (
    <>
      <Head>
        <title>Thanosan Prathifkumar</title>
        <meta name="description" content="Thanosan Prathifkumar Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900">
        <div>
          <nav className="py-5 px-5 sm:px-10 mb-12 flex justify-between items-center bg-white sticky top-0 z-10">
            <h1 className="text text-xs sm:text-lg"><span className="text-teal-700 font-semibold">Thanosan</span>P</h1>
            <ul className="flex items-center">
              <li className="px-2"><a className="hover-line" href="#">Home</a></li>
              <li className="px-2"><a className="hover-line" href="#About">About</a></li>
              <li className="px-2"><a className="hover-line" href="#Skills">Skills</a></li>
              <li className="px-2"><a className="hover-line" href="#Contact">Contact</a></li>
            </ul>
          </nav>
        <section className="min-h-screen px-10">
        <Hero />
        </section>
        <section id="About" className="min-h-screen bg-teal-700 py-10 flex flex-col items-center justify-center">
          <About />
        </section>
        <section id="Skills" className="min-h-screen px-10 p-10">
          <Skills />
        </section>
        <section id="Contact" className="min-h-screen bg-teal-700 py-10">
          <Contact />
        </section>
        </div>
      </main>
    </>
  );
}
