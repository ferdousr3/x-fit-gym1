import React from "react";
import about from "../../images/about/about.jpg";

const About = () => {
  return (
    <div className="pt-20 pb-36">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto ">
          <img className="w-48 h-48 rounded-full mx-auto" src={about} alt="" />
          <div className="pt-8">
            <h1 className="text-second text-4xl font-bold">MD.Ferdous</h1>
            <p className="text-sm text-four pt-4">
              My Name is md.ferdous, I want to be a full-stack web Developer. I
              learn Front-end part's HTML, CSS, JavaScript, React, and some CSS
              framework. I practicing React and its tools and features. Now I
              learn firebase , firebase authentication, firebase email ,
              password login.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
