import React from 'react';
import Typewriter from 'typewriter-effect';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { ButtonUnstyled } from '@mui/base';

const Hero = () => {
  return (
    <>
      <div className="text-center p-10">
        <p className="font-semibold">Hello, my name is</p>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl py-2 text-teal-700 font-bold">Thanosan Prathifkumar</motion.h2>
        <h3 className="font-semibold text-2xl py-2">
          <Typewriter
            options={{
              strings: ['I am a developer', 'I am an innovator', 'I am a tech enthusiast', 'I am a leader'],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800">Read more about me below!</p>
      </div>
      <div className="text-5xl flex justify-center gap-16 pb-20">
        <a className="hover:cursor-pointer hover:text-gray-800 hover:scale-110 hover:translate-y-1 duration-300 delay-50" rel="noreferrer" target="_blank" href="https://github.com/thanosan23">
          <AiFillGithub />
        </a>
        <a className="hover:cursor-pointer hover:text-gray-800 hover:scale-110 hover:translate-y-1 duration-300 delay-50" href="mailto:p.thanosan23@gmail.com">
          <AiOutlineMail />
        </a>
      </div>
      <div className="flex justify-center item-center">
        <a href="#About">
          <ButtonUnstyled className="bg-teal-800  text-white rounded px-5 py-2 font-semibold hover:bg-teal-700 hover:scale-110 hover:translate-y-1 delay-50 duration-300">
            About Me
          </ButtonUnstyled>
        </a>
      </div>
    </>
  );
};

export default Hero;
