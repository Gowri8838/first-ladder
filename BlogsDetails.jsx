import React from 'react'
import { useLocation } from 'react-router-dom';
import BlogsComp from './Blogs/BlogsComp.jsx';
// import BlogsComp from "../components/Blogs/BlogsComp";
import { Link } from 'react-router-dom';

const BlogsDetails = () => {
   const location = useLocation();
   console.log(location, "useLocation");
   const {image, title, description } = location.state;
  return (
    <div className='min-h-[550px] pt-20'>
      <div className='h-[300px overflow-hidden]'>
        <img src={image} alt="" 
        className='mx-auto w-full object-cover h-[600px]
        transition duration-700 '/>
      </div>
      <div className='container'>
        <p className='text-slate-600 text-sm py-3'>
          {" "}
        </p>
        <h1 className=' font-semibold text-3xl text-center italic mt-10 text-blue-700'>{title}</h1>
        <p className='mt-[21px]'>{description}</p>
      </div>
      <BlogsComp/>
      <div className="flex flex-col justify-center items-center mb-4 ml-9 mr-9 bg-gray-100 rounded-lg shadow-lg md:scroll-sm">
      <p className="text-4xl text-gray-700 mt-5 mb-2 text-center">
      Need a Consultation?      </p>
      <p className="text-md text-gray-700 mb-4 text-center">
      Reach out to us today and book an appointment for a free counselling session to clarify all your queries with our team.      </p>
      <Link to="/contactUs">
        <button className="text-md font-semibold text-white bg-sky-500 py-3 px-8 mb-4 rounded-lg shadow-lg hover:bg-sky-600">
        Make On Appointment
        </button>
      </Link>
    </div>
    </div>
    
  )
}

export default BlogsDetails
