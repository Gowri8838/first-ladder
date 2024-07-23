import React from "react";
import lkjhj from '../components/assets/lkjhj.png';
import welcome1 from '../components/assets/welcome1.png';
import missionvision from '../components/assets/missionvision.png';
import n1 from "./assets/n1.jpeg";
import studentsimag4 from "./assets/studentsimag4.png";
import aaaasd from "./assets/aaaasd.jpg";
import { Link } from "react-router-dom";


const AboutUs = () => {

  return (
    <>
      <div className="relative">
        <img src={lkjhj} alt="" className=" h-full rounded-xl object-cover opacity-90 w-full" />
        <div className="absolute inset-0 text-center font-bold text-5xl md:mt-56">
          <h1 className="font-serif block rounded-lg p-2 text-white pt-30">ABOUT US</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <img src={welcome1} alt="" className="md:ml-14 h-64 w-80 rounded-xl md:mt-20" />
        <div className="md:ml-4 md:mr-10">
          <h1 className="text-3xl font-bold text-center italic md:mt-10 text-sky-500">Welcome to First Ladder</h1>
          <p className="text-lg md:mt-5 md:mr-20  md:ml-20 font-serif text-justify">First-Ladder is an International Education, Immigration, and Recruitment Consulting Company headquartered in Chennai, India. We are a leading global career consulting firm, providing innovative and customized solutions to students, job seekers, and employers. Our process starts with developing an accurate profile of each candidate and using that as our database to match them with the available opportunities in terms of education and jobs. Our aim is to help students and professionals from all over the world to find opportunities that match their requirements, skills, interests, and aspirations, so that they can pursue their while achieving higher returns on investment.</p>
        </div>
      </div>

      <div className="bg-grey-400">
        <div className="flex">
          <img src={missionvision} alt="" className="md:ml-14 h-64 w-80 rounded-xl md:mt-20" />
          <div>
            <h1 className="text-3xl font-bold text-center italic md:mt-10 text-sky-500">Our Vision And Mission</h1>
            <p className="text-lg md:mt-10  md:mr-40 md:ml-20 font-serif text-justify">Vision: To become the leading Overseas Education Consulting Organization for overseas education by providing customized solutions to students who aspire to study abroad.</p>
            <p className="text-lg md:mt-3  md:mr-40 md:ml-20 font-serif text-justify">Mission: To facilitate admission and visa processing by offering educational counseling and support to aspiring students from all over Pakistan. AK Consultants empowers students to achieve their dreams and make a positive impact on their lives and communities</p> 
           
          </div>
        </div>

      </div>
      



      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 ml-14 mr-9 md:cursor-pointer md:scroll-sm">
        <div className="flex flex-col items-center rounded-lg p-4 shadow-md max-w-xs">
          <img
            src={n1}
            alt="UK"
            className="mb-4 h-48  rounded-md object-cover"
          />
          <h3 className="text-xl font-semibold mb-4">Study in Abroad</h3>
          <p className="text-md text-gray-700">
          Exploring the world one classroom at a time
          </p>
        </div>

  

        <div className="flex flex-col items-center  rounded-lg p-4 shadow-md max-w-xs"> {/* Added max-w-xs */}
          <img
            src={studentsimag4}
            alt="Ireland"
            className=" mb-4 h-48 rounded-md object-cover"
          />
          <h3 className="text-xl  font-semibold mb-4">Assured Placement</h3>
          <p className="text-md text-gray-700">
          Unlock Your Global Future: Assured Placement with Our First Ladder
          </p>
        </div>
        <div className="flex flex-col items-center rounded-lg p-4 shadow-md max-w-xs"> {/* Added max-w-xs */}
          <img
            src={aaaasd}
            alt="US"
            className="mb-4 rounded-md h-48 object-cover"
          />
          <h3 className="text-xl font-semibold mb-4">Grow with Us</h3>
          <p className="text-md text-gray-700">
          Grow Beyond Borders: Your Path to Success with Our First Ladder
          </p>
        </div>

      </div>
      <div className="flex flex-col justify-center items-center  mt-4 ml-9 mb-4 mr-9 bg-gray-100 rounded-lg shadow-lg md:scroll-sm">
      <p className="text-md text-gray-700 mt-12 mb-2 text-center">
        We are a leading global career consulting firm, providing innovative and customized solutions to students, job seekers and employers.
      </p>
      <p className="text-md text-gray-700 mb-4 text-center">
        Our process starts with developing an accurate profile of each candidate and using that as our database to match them with the available opportunities in terms of education and jobs.
      </p>
      <Link to="/contactUs">
        <button className="text-md font-semibold text-white bg-sky-500 py-3 px-8 mb-4 rounded-lg shadow-lg hover:bg-sky-600">
          Know More
        </button>
      </Link>
    </div>
          </>
  )
}

export default AboutUs;
