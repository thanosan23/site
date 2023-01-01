import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import contact_image from '../public/contact.svg'

const Contact = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center text-white mt-10">
        <h6 className="text-lg font-semibold pt-7">Get In Touch</h6>
        <h3 className="font-bold text-4xl">Contact Me</h3>
        <div className="flex flex-wrap justify-center gap-20 items-center p-20">
          <div className="p-5 flex flex-col text-left bg-white rounded shadow-lg text-black hover:scale-105 hover:translate-y-1 delay-50 duration-300">
            <div className="mb-2">
              <h4 className="text-lg font-semibold">Email:</h4>
              <a className="hover:opacity-80" href="mailto:p.thanosan23@gmail.com">p.thanosan23@gmail.com</a>
            </div>
            <div className="mb-2">
              <h4 className="text-lg font-semibold">GitHub:</h4>
              <a className="hover:opacity-80" rel="noreferrer" target="_blank" href="https://github.com/thanosan23">Take me there</a>
            </div>
            <div className="mb-2">
              <h4 className="text-lg font-semibold">Devpost:</h4>
              <a className="hover:opacity-80" rel="noreferrer" target="_blank" href="https://devpost.com/thanosan23">Take me there</a>
            </div>
            <div className="mb-2">
              <h4 className="text-lg font-semibold">Located:</h4>
              <p>Ontario, Canada</p>
            </div>
          </div>
          <div className="p-5">
            <Image src={contact_image} width={300} height={300} alt="Contact"/>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
