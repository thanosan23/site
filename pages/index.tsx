import Head from 'next/head'

import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

import { ButtonUnstyled } from '@mui/base'

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
            <a href="#">
              <h1 className="text text-xs sm:text-lg"><span className="text-teal-700 font-semibold">Thanosan</span>P</h1>
            </a>
            <ul className="flex items-center">
              <li className="px-2"><a className="hover-line" href="#">Home</a></li>
              <li className="px-2"><a className="hover-line" href="#About">About</a></li>
              <li className="px-2"><a className="hover-line" href="#Skills">Skills</a></li>
              <li className="px-2"><a className="hover-line" href="#Projects">Projects</a></li>
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
          <section id="Projects" className="min-h-screen px-10 p-10 bg-teal-700">
            <Projects />
          </section>
          <section className="bg-white">
            <div className="flex flex-col item-center text-center justify-center my-12">
              <h3 className="text-3xl text-teal-700 font-semibold my-9">Want to get in touch?</h3>
              <a href="#Contact">
                <ButtonUnstyled className="bg-teal-800 text-white hover:opacity-80 rounded px-5 py-2 hover:scale-110 hover:translate-y-1 duration-300 delay-50">
                  Contact Me
                </ButtonUnstyled>
              </a>
            </div>
          </section>
          <section id="Contact" className="min-h-screen bg-teal-700 py-10">
            <Contact />
          </section>
        </div>
      </main>
    </>
  );
}
