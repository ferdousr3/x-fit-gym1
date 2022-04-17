import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const Button = ({text,route}) => {
  const navigate = useNavigate()
  return (
    <div className="flex pt-10">
      <button
        className="flex justify-center items-center bg-main hover:bg-mains py-4 px-8 rounded-full text-base transition-all duration-700 text-white font-light "
        onClick={() => navigate(`/${route}`)}
      >
        <p>
          {text}
        </p> <ArrowNarrowRightIcon className="w-6 h-5 ml-2" />
      </button>
    </div>
  );
};

export default Button;