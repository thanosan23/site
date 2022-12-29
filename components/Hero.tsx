import React from 'react';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <>
      <div className="text-center p-10">
        <p>Hello, my name is</p>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-4xl py-2 text-teal-700 font-semibold">Thanosan Prathifkumar</motion.h2>
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl py-2">Student and Developer</motion.h3>
        <p className="text-md py-5 leading-8 text-gray-800">Read more about me below!</p>
      </div>
      <div className="text-5xl flex justify-center gap-16">
        <a className="hover:cursor-pointer hover:text-gray-800" rel="noreferrer" target="_blank" href="https://github.com/thanosan23">
          <AiFillGithub />
        </a>
        <a className="hover:cursor-pointer hover:text-gray-800" href="mailto:p.thanosan23@gmail.com">
          <AiOutlineMail />
        </a>
      </div>
    </>
  );
};

export default Hero;
