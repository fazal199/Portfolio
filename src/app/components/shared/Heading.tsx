
import React, { memo } from "react";

const Heading = ({ content}: any) => {



  return (
    <div  className="max-w-lg mx-auto mobile-sm:w-full">
      <h2 className="text-5xl py-2 font-bold text-quaternary text-center tracking-[0.05em] mobile-md:text-4xl mobile-sm:text-[2rem]">
        {content}
      </h2>
      <div className="gsp-line origin-center h-1 mt-2 w-[60%] mx-auto bg-tertiary mobile-md:mx-auto mobile-sm:mt-2"></div>
      <div className="gsp-line origin-center h-1 mt-3 w-[40%] mx-auto bg-tertiary mobile-md:w-[80%] mobile-sm:mt-3"></div>
    </div>
  );
};

export default memo(Heading);
