import React from 'react';

const FooterTitle = ({title}) => {
  return (
    <div>
      <h1 className="text-second  text-2xl font-bold pt-1.5 pb-6 ml-0 ">
       
        {title} <span className="border-b-2 pl-2 border-b-main ml-1  pb-5 w-3/12 h-2 block "> </span>
      </h1>
    </div>
  );
};

export default FooterTitle;