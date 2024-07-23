import { useEffect, React, useState } from 'react';
import { Link } from "react-router-dom";
import bg from "./assets/bg.jpg";
import bg4 from "./assets/uk.jpg";
import bg5 from "./assets/ireland.jpg";
import bg6 from "./assets/us.jpg";
import logo2 from "./assets/profile analysis.png";
import logo3 from "./assets/preparation.png";
import logo4 from "./assets/shortlist.png";
import logo5 from "./assets/scholarship.png";
import logo6 from "./assets/guidance.png";
import logo7 from "./assets/teaching.png";
import indeximage1 from "./assets/studentsimag7.png";
import indeximage2 from "./assets/studentsimag2.png";
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Satisfy&family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"></link>
const Home = () => {
  const [imageindex, setimageindes] = useState(0)
  const imagearray = [indeximage1, indeximage2]

  useEffect(() => {
    const interval = setInterval(() => {
      setimageindes((prev) => (prev + imagearray.length + 1) % imagearray.length)
    }, 3000)
    return () => clearInterval(interval)

  }, [imagearray])
  
  return (
    <>
     <div className="gap-10 flex items-center justify-center mt-[2%] w-full relative">
      <img src={imagearray[imageindex]} alt="images" className='scroll-smooth  w-full h-[650px]' />
      <div className='w-full h-[650px] absolute flex justify-center items-center top-0 left-0 flex-col backdrop-brightness-50'>
        <h1 className='text-5xl font-bold mt-20 text-gray-50'>Welcome to First Ladder </h1> <br />
      </div>
    </div>
      
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 md:scroll-sm ml-9 mr-9 ">
      <div className=" bg-gray-100 p-4 rounded-lg">
        <img src={bg} alt="" className="max-w-full h-auto rounded-lg" />
      </div>   
      <div className="bg-gray-100 p-5 flex flex-col justify-center rounded-lg">
        <h3 className="text-3xl font-semibold text-center md:text-left">Planning to Study Abroad?</h3>
        <p className="text-md mb-6 mt-6 ml-2 mr-2 text-center md:text-left">
          Study abroad is becoming more common but the students are increasingly overwhelmed. You see lots of ads in magazines, social media and on TV, but do you know if they are the right places for you? The process of studying abroad is not as simple as it seems. It can be a confusing, intimidating and expensive process. What you choose to study and where you study will affect your college career, and possibly the rest of your life! Our team provides a comprehensive study abroad assistance to help you make the right choices when applying for higher education programs. Our services will help you with every step of your study abroad journey from application to arrival all under one roof!
        </p>
        <Link to="/contactUs">
          <button className="text-md font-semibold text-white bg-sky-500 py-3 px-8 rounded-lg shadow-lg hover:bg-sky-600 self-center md:self-start">
            Enquire Now for Training Programs
          </button>
        </Link>
      </div>
    </div>

    <div className="container md:scroll-sm">
      <h3 className="text-2xl font-semibold mt-12 text-center md:ml-36 mb-8">Why Choose First Ladder for Study Abroad?</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex items-center bg-sky-200 p-8 rounded-lg cursor-pointer">
          <img src={logo3} alt="" className="h-12 mr-2 " /> 
          <p className="text-md">Interview Preparation</p>
        </div>
        <div className="flex items-center bg-sky-200 p-8 rounded-lg cursor-pointer">
          <img src={logo4} alt="" className="h-12 mr-2" />
          <p className="text-md">University & Program Shortlist</p>
        </div>
        <div className="flex items-center bg-sky-200 p-8 rounded-lg cursor-pointer">
          <img src={logo6} alt="" className="h-12 mr-2" />
          <p className="text-md">Letter of Recommendation Guidance</p>
        </div>
        <div className="flex items-center bg-sky-200 p-8 rounded-lg cursor-pointer">
          <img src={logo2} alt="" className="h-12 mr-2" />
          <p className="text-md">Profile Analysis</p>
        </div>
        <div className="flex items-center bg-sky-200 p-8 rounded-lg cursor-pointer">
          <img src={logo5} alt="" className="h-12 mr-2" />
          <p className="text-md">Scholarship & Financial Aid Advice</p>
        </div>
        <div className="flex items-center bg-sky-200 p-8 rounded-lg cursor-pointer">
          <img src={logo7} alt="" className="h-12 mr-2" />
          <p className="text-md">SAT & IELTS Prep</p>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 ml-9 mr-9 md:cursor-pointer md:scroll-sm">
      <div className="flex flex-col items-center rounded-lg shadow-md">
        <img
          src={bg4}
          alt="UK"
          className="mb-4 rounded-md object-cover"
        />
        <h3 className="text-xl font-semibold mb-4">Study in the UK</h3>
        <p className="text-md text-gray-700">
          Discover top universities and programs in the UK.
        </p>
      </div>
      <div className="flex flex-col items-center rounded-lg  shadow-md">
        <img
          src={bg5}
          alt="Ireland"
          className=" mb-4 rounded-md object-cover"
        />
        <h3 className="text-xl font-semibold mb-4">Study in Ireland</h3>
        <p className="text-md text-gray-700">
          Explore education opportunities in Ireland.
        </p>
      </div>
      <div className="flex flex-col items-center rounded-lg  shadow-md">
        <img
          src={bg6}
          alt="US"
          className="mb-4 rounded-md object-cover"
        />
        <h3 className="text-xl font-semibold mb-4">Study in the US</h3>
        <p className="text-md text-gray-700">
          Learn about studying in the United States.
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
  );
};

export default Home;
