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
        <section className="min-h-screen px-10">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl"><span className="text-teal-700 font-semibold">Thanosan</span> Prathifkumar</h1>
          <ul className="flex items-center">
          </ul>
        </nav>
        <Hero />
        </section>
        <section className="min-h-screen bg-teal-700 py-10 flex flex-col items-center justify-center">
          <About />
        </section>
        <section className="min-h-screen px-10 p-10">
          <Skills />
        </section>
        <section className="min-h-screen bg-teal-700 py-10">
          <Contact />
        </section>
      </main>
    </>
  );
}
