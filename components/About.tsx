import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col items-center justify-center mb-20 text-white">
        <h4 className="font-semibold py-2 text-2xl">Welcome to my website</h4>
        <h3 className="text-5xl font-bold pb-10 text-center">My name is Thanosan.</h3>
        <p className="w-2/3">I am a high school student in Canada. I try to bring my unique solutions to fruition through application development, machine learning, and frontend/backend web development.</p>
        <div className="seperator block w-1/3 bg-gray-700"></div>
        <div className="mt-12 text-center py-10 px-5 w-1/2 bg-white text-black rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold pb-2">Programming Languages:</h3>
          <p className="pb-4 text-lg">Python, C++, C, JavaScript, HTML, CSS, SQL</p>
          <h3 className="text-xl font-semibold pb-2">Frameworks and Libraries:</h3>
          <p className="pb-4 text-lg">Flask, ReactJS, NextJS, PyTorch, OpenCV, Matplotlib, Pandas</p>
        </div>
      </motion.div>
    </>
  );
};

export default About;
