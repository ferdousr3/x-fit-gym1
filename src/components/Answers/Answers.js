import React from 'react';

const Answers = ({ques,ans}) => {
  return (
    <div className='shadow-7xl bg-white py-6 px-6 my-3 '>
      <h1 className='text-xl text-second font-bold' >{ques}?</h1>
      <p className='pt-4 text-[16px] text-four'>
        <span className='text-xl font-bold text-four' >Ans:</span> {ans}
      </p>
    </div>
  );
};

export default Answers;