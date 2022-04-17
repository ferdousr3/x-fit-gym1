import { ClockIcon } from '@heroicons/react/outline';
import React from 'react';

const FooterIconTitle = ({icon,text}) => {
  return (
    <div className="flex items-center mb-5">
      <span className="w-5 text-mains ">
        {icon}
      </span>
      <p className="ml-3 text-four text-sm font-light">
  
     {text}
      </p>
    </div>
  );
};

export default FooterIconTitle;