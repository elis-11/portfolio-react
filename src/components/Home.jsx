import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import CV from '../../assets/cv.png';
import CV from "../assets/cv.pdf";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1d1d1d]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-gray-300">
        <p className="text-[#08fdd8]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold">Elisa Arzanukaeva</h1>
        <h2 className="text-4xl sm:text-7xl font-bold">
          {/* <h2 className='text-4xl sm:text-7xl font-bold text-[#ccc]'> */}
          I'm a Full Stack Developer.
        </h2>
        <p className="py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          {/* <button className='text-[#08fdd8] group border-2 border-[#08fdd8] px-6 py-3 my-2 flex items-center hover:bg-[#08fdd8] hover:text-black hover:border-[#08fdd8]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button> */}
          <a
            href={CV}
            download
            className="text-[#08fdd8] group w-[200px] border-2 border-[#08fdd8] px-2 py-3 my-2 flex items-center hover:bg-[#08fdd8] hover:text-black hover:border-[#08fdd8]"
          >
            Download CV
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
