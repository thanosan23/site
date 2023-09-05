import React from 'react';
import { motion } from 'framer-motion';
import { ButtonUnstyled } from '@mui/base';
import Image from "next/image";
import programming_image from "../public/programming.svg"

const About = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col gap-20 items-center justify-center text-center mb-20 mt-10 text-white">
        <div className="flex flex-col text-center justify-center items-center">
          <h4 className="font-semibold py-2 text-2xl">Welcome to my website</h4>
          <h3 className="text-5xl font-bold pb-10 text-center">My name is Thanosan.</h3>
          <p className="w-2/3">I am a high school student in Canada. I try to bring my unique solutions to fruition through application development, machine learning, and frontend/backend web development.</p>
            <br></br>
            <p>You can check out my TKS life profile <a target="_blank" className="underline" href="https://tks.life/profile/thanosan.prathifkumar#about">here</a>.</p>
        </div>
        <div>
          <Image src={programming_image} width={250} height={250} alt="programming"/>
        </div>
        <div>
          <a onClick={() => {
              document.getElementById('Contact')?.scrollIntoView({ block: 'start', behavior: 'smooth' })
            }}>
            <ButtonUnstyled className="bg-white text-teal-900 rounded px-5 py-2 font-semibold hover:translate-y-1 hover:scale-110 hover:opacity-80 delay-50 duration-300">
              Contact Me
            </ButtonUnstyled>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default About;
