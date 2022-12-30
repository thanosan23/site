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
          <nav className="py-5 px-10 mb-12 flex justify-between bg-white sticky top-0 z-10">
            <h1 className="lg:text-xl sm:text-sm md:text-sm"><span className="text-teal-700 font-semibold">Thanosan</span> P</h1>
            <ul className="flex items-center">
              <li><a className="px-2" href="#">Home</a></li>
              <li><a className="px-2" href="#About">About</a></li>
              <li><a className="px-2" href="#Skills">Skills</a></li>
              <li><a className="px-2" href="#Contact">Contact</a></li>
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
