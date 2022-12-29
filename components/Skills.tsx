import React from 'react';
import { motion } from 'framer-motion';
import SkillBox from './SkillBox';
import { FaPython, FaReact } from 'react-icons/fa';
import { SiPytorch } from 'react-icons/si';
import { BiServer } from 'react-icons/bi';

const Skills = () => {
  return (
    <>
      <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center text-4xl font-bold mb-5">Skills</motion.h3>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex py-5 flex-wrap gap-5 items-center justify-center">
        <SkillBox icon={<FaPython/>} title="Python">
          I have used Python libraries to create websites and to create machine learning models.
        </SkillBox>
        <SkillBox icon={<FaReact/>} title="Front End Development">
          I enjoy working with frameworks such as Next.js, React.js, and Tailwind CSS.
        </SkillBox>
        <SkillBox icon={<BiServer/>} title="Back End Development">
          Using frameworks such as Flask, Node.js, and Prisma, I am able to effectively create and mantain databases.
        </SkillBox>
        <SkillBox icon={<SiPytorch/>} title="Machine Learning">
          I have used machine learning libraries such as PyTorch, Tensorflow, and Keras to create machine learning models and neural networks.
        </SkillBox>
      </motion.div>
    </>
  );
};

export default Skills;
