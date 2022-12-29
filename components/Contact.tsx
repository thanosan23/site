import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center text-white">
        <h6 className="text-lg font-semibold">Get In Touch</h6>
        <h3 className="font-bold text-4xl">Contact Me</h3>
        <div className="flex flex-col justify-center items-center p-20">
          <div className="p-5 flex flex-col text-left bg-white rounded shadow-lg text-black">
            <div className="mb-2">
              <h4 className="text-lg font-semibold">Email:</h4>
              <a href="mailto:p.thanosan23@gmail.com">p.thanosan23@gmail.com</a>
            </div>
            <div className="mb-2">
              <h4 className="text-lg font-semibold">GitHub:</h4>
              <a rel="noreferrer" target="_blank" href="https://github.com/thanosan23">Take me there</a>
            </div>
            <div className="mb-2">
              <h4 className="text-lg font-semibold">Devpost:</h4>
              <a rel="noreferrer" target="_blank" href="https://devpost.com/thanosan23">Take me there</a>
            </div>
            <div className="mb-2">
              <h4 className="text-lg font-semibold">Located:</h4>
              <p>Ontario, Canada</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
