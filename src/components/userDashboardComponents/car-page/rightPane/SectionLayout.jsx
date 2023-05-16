import React from "react";

const SectionLayout = ({ children, title }) => {
  return (
    <div>
      <h4 className="text-[1.5rem] font-[500] mb-4">{title}</h4>
      <div className="border-[1px] rounded-2xl col-span-2 px-[2rem] py-6 border-bgrey">
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;
