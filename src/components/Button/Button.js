import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const Button = ({text,route}) => {
  const navigate = useNavigate()
  return (
    <div className="flex pt-10">
      <button
        className="flex justify-center items-center bg-main hover:bg-mains py-4 px-10 rounded-full uppercase text-base transition-all duration-500 text-white font-medium "
        onClick={() => navigate(`/${route}`)}
      >
        {" "}
        <p>
          {text}
        </p> <ArrowNarrowRightIcon className="w-6 h-5 ml-2" />
      </button>
    </div>
  );
};

export default Button;