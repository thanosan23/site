import React from 'react';
import { ButtonUnstyled } from '@mui/base';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const ProjectBox = ({projectName, link, children}) => {
  return (
    <>
      <div className="bg-white text-teal-800 py-10 rounded-xl shadow-lg w-full md:w-1/3 text-center hover:translate-y-1 duration-300 delay-50">
        <h4 className="text-xl font-semibold">{ projectName }</h4>
        <div className="mt-5 px-10">
          { children }
        </div>
        <div className="mt-5">
          <a rel="noreferrer" target="_blank" href={link}>
            <ButtonUnstyled className="bg-teal-800 text-white rounded px-5 py-2 font-semibold hover:translate-y-1 hover:scale-110 hover:opacity-80 delay-50 duration-300">
              <div className="flex flex-row gap-2 items-center">
                Visit
                <BsBoxArrowUpRight />
              </div>
            </ButtonUnstyled>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
