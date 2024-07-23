import { Link } from "react-router-dom";
import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import k2 from "../components/assets/k2.png";
import rec from "../components/assets/ic2.png";
// import study from "../components/assets/ic3.png";
import fsd from "../components/assets/fsd.png";
import datas from "../components/assets/datas.png";
import ent from "../components/assets/ent.png";


const TrainingPrograms = () => {
  return (
    <div className="pt-24">
      {/* Banner section */}
      <div className="relative h-64 pb-[400px] lg:h-96 mt-[20px]   ">
          <img src={k2} alt="banner" className="w-full h-[400px]" />

        <div className="absolute inset-0 flex justify-start  pl-[60px] pb-[200px] pt-[80px] font-sans">
        <center>
          <h1 className=" md:text-4xl lg:text-5xl font-bold text-gray-800 ">
            
            <span className="text-gray-800 flex items-center text-3xl">Explore the Toppest </span> <br />
            
            <span className="text-white flex items-center font-mono text-gradient-to-r from-sky-500 to-black text-5xl">TRENDING</span>
           
            <br />
            <span className="text-6xl">{"  "} First Ladder Courses</span>
             
          </h1>
          </center>
        </div>
      </div>
     


      {/* Get Started button */}
      <div className="flex justify-center mt-[40px] mb-[-100px]" >
        <button id="c4">
      <a
  class="group relative inline-block overflow-hidden border border-sky-700 px-8 py-3 focus:outline-none focus:ring"
  href="#"
>
  <span
    class="absolute inset-y-0 left-0 w-[2px] bg-sky-600 transition-all group-hover:w-full group-active:bg-sky-500"
  ></span>

  <span
    class="relative text-sm font-medium text-sky-400 transition-colors group-hover:text-white"
  >
    Explore
  </span>
</a>
</button>
</div>
<br /><br /><br /><br />
<br />
<br />
<div className="border border-2 h-1 border-sky-400 mx-[140px] "></div>
<br />


      {/* Section introduction */}
      <div className="mt-20 mx-4 lg:mx-16 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Take pride in successful training programs
        </h2>
        <p className="mt-4">
          Welcome to FirstLadder — your gateway to career advancement and skill
          enhancement. Our mission is to empower individuals with the knowledge
          and tools they need to succeed in their careers. Whether you're just
          starting out or looking to advance to the next level, FirstLadder
          offers a range of courses designed to meet your needs.
        </p>
      </div>

      {/* Courses section */}
      <div className="mt-20 mx-4 lg:mx-16" >
        <h3 className="text-center text-3xl lg:text-4xl font-bold"
      id="#course"
        >
          
        <a href="#c4">
         <span className="text-sky-500"> THE 3 </span> Courses You Must Know About
          </a>
        </h3>
        <div className="mt-8 space-y-12">
          {/* Full Stack Web Development */}
          <div className="flex flex-col lg:flex-row items-center bg-gradient-to-r from-white to-sky-500 rounded-md shadow-lg overflow-hidden p-[60px]">
            <img
              src={fsd}
              alt="Full Stack Web Development"
              className="w-full lg:w-1/2 h-64 object-cover mt-[-5px]"
            />
            <div className="p-6 lg:p-12">
              <h4 className="text-3xl font-bold">Full Stack Web Development</h4>
              <p className="my-4">
                Learn the ins and outs of full-stack web development. Build
                modern websites with cutting-edge technology.
              </p>
              <Link to="/Fullstack">
              <button className="px-4 py-2 border border-sky-400 rounded-lg text-sky-500 bg-white transition duration-300 transform hover:scale-110 hover:bg-sky-900 hover:text-white">
                Learn
              </button>
              </Link>
            </div>
          </div>

          {/* Enrolled Agent Training */}
          <div className="flex flex-col  p-[60px] lg:flex-row-reverse items-center bg-gradient-to-r from-sky-500 to-white rounded-md shadow-lg overflow-hidden">
            <img
              src={ent}
              alt="Enrolled Agent Training"
              className="w-full lg:w-1/2 h-64 object-cover "
            />
            <div className="p-6 lg:p-12">
              <h4 className="text-3xl font-bold">Enrolled Agent Training</h4>
              <p className="my-4">
                Become a certified enrolled agent. Learn about taxes, financial
                regulations, and more.
              </p>
              <Link to={'/enrolledAgent'}>
              <button className="px-4 py-2 border border-sky-400 rounded-lg bg-white text-sky-500 transition duration-300 hover:bg-sky-900 hover:text-white">
                Learn
              </button>
              </Link>
            </div>
          </div>

          {/* Data Science */}
          <div className="flex flex-col  p-[60px] lg:flex-row items-center bg-gradient-to-r from-white to-sky-500 rounded-md shadow-lg overflow-hidden">
            <img
              src={datas}
              alt="Data Science"
              className="w-full lg:w-1/2 h-64 object-cover"
            />
            <div class="p-6 lg:p-12">
              <h4 className="text-3xl font-bold">Data Science</h4>
              <p className="my-4">
                Dive into data science and learn how to work with large datasets
                to extract valuable insights.
              </p>
              <Link to="/Datascience">
              <button
                className="px-4 py-2 border border-sky-400 rounded-lg text-sky-500 bg-white transition duration-300 hover:bg-sky-900 hover:text-white"
              >
                Join
              </button></Link>
            </div>
          </div>
        </div>
      </div>

    {/* Key features section */}
<div className="mt-16 mb-4 flex justify-center">
  <fieldset className="border border-4 border-sky-300 rounded-3xl w-full max-w-6xl p-8">
    <legend className="text-4xl font-bold text-sky-400 font-mono font-semibold">Key Features</legend>
    <div className="flex flex-col sm:flex-row lg:flex-row justify-evenly items-center mt-8 space-y-8 sm:space-y-0">
      {/* Feature 1 */}
      <div className="text-center flex flex-col items-center">
        <RiComputerLine size={70} className="text-sky-500" />
        <h5 className="mt-4 text-xl font-bold">Live Interactive Classes</h5>
      </div>

      {/* Feature 2 */}
      <div className="text-center flex flex-col items-center">
        <img src={rec} alt="Placement Assured Program" className="w-16 h-16" />
        <h5 className="mt-4 text-xl font-bold">Placement Assured Program</h5>
      </div>

      {/* Feature 3 */}
      <div className="text-center flex flex-col items-center">
        <IoBookSharp size={70} className="text-sky-500" />
        <h5 className="mt-4 text-xl font-bold">Comprehensive Study Material</h5>
      </div>
    </div>
    <br />
    <br />
  </fieldset>
</div>
    
    </div>
  );
};

export default TrainingPrograms;

