import React from 'react';

const SkillBox = ({ icon, title, children }) => {
  return (
    <>
      <div className="text-center text-white shadow-lg py-10 px-5 rounded-xl w-full sm:w-1/3 h-auto bg-teal-700 hover:translate-y-1 duration-300 delay-50">
        <div className="mx-5">
          <div className="flex items-center justify-center text-5xl">
            { icon }
          </div>
          <h3 className="text-lg font-medium pt-8 pb-2">{title}</h3>
          <div>
            <p className="py-2">
              { children }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillBox;
