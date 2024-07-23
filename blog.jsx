import { useEffect, React, useState } from 'react';
import BlogsComp from './Blogs/BlogsComp.jsx'
// import BlogsCompNext from './Blogs/BlogsCompNext.jsx'
import Img1 from "../components/assets/studentsimag1.png";
import Img2 from "../components/assets/studentsimag11.png";
import Img7 from "../components/assets/studentsimag7.png";
import Img4 from "../components/assets/studentsimag10.png";
import { Link } from 'react-router-dom';



const Blog = () => {

  const [imageindex, setimageindes] = useState(0)
  const imagearray = [Img1, Img2, Img7, Img4]

  useEffect(() => {
    const interval = setInterval(() => {
      setimageindes((prev) => (prev + imagearray.length + 1) % imagearray.length)
    }, 3000)
    return () => clearInterval(interval)

  }, [imagearray])
  return (
    <>
    <div className="gap-10 flex items-center justify-center w-full relative">
      <img src={imagearray[imageindex]} alt="images" className='scroll-smooth  w-full h-[700px]' />
      <div className='w-full h-[700px] absolute flex justify-center items-center top-0 left-0 flex-col backdrop-brightness-50'>
      <h1 className='text-5xl font-bold text-gray-50'>Welcome to Our Blog!</h1> <br />
        <h4 className='text-lg text-gray-50 mt-6 text-center font-serif flex justify-center items-center w-[75%]'>Are you looking for reliable immigration consultants to handle your immigration case? Our certified and reliable Immigration Consultant professionals can help you get a positive decision on your case! We provide services in all different areas of immigration.</h4>
      </div>
    </div>
    <div className='min-h-[650px] pt-20 '>
      <BlogsComp/>
      {/* <BlogsCompNext/> */}

    </div>
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
    </>
  )
}

export default Blog

