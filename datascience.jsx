import { Link } from 'react-router-dom';
import barrner from '../components/assets/bigdata.jpg'
import subimg from '../components/assets/dedicated-career-services.png';
import subimg2 from '../components/assets/hands-on-learning.png';
import subimg3 from '../components/assets/hand ai.jpg';
import subimg4 from '../components/assets/datadata.avif';

function Datascience () {
  return (
    <>
      <div className=" mt-20">
        <img src={barrner} alt="barrner" className="w-full h-[350px] object-cover" />
      </div>
      <div className="flex flex-wrap justify-center gap-5 m-5">
        <img src={subimg} alt="" className="w-full sm:w-[500px] h-80 pt-10 mx-5 object-cover " />
        <img src={subimg2} alt="" className="w-full sm:w-[500px] h-80 pt-10 mx-5 object-cover" />
        <img src={subimg3} alt="" className="w-full sm:w-[500px] h-80 pt-10 mx-5 object-cover" />
      </div>
      <h2 className="text-3xl pt-10 text-center text-sky-900 ">DATA SCIENCE</h2>
      <p className="pt-8 text-center mx-5 ">
        At First-Ladder, we take pride in offering a comprehensive Enrolled Agent (EA) course, designed and developed by experts. Approved and certified by IRS (U.S.A), shall be recognized as professional certification. Our program is designed to elevate your proficiency in tax preparation, strategic planning, and efficient resolution of IRS matters.

        Join us on the path to becoming a skilled Enrolled Agent, and let First-Ladder be your trusted partner in advancing your career in taxation. Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data.
      </p>
      <div className="pt-10 mx-5">
        <img src={subimg4} alt="" className="w-full" />
      </div>
      <section className="bg-gray-900 text-white mt-10">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[300px] lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Need Consultation ?
              <br />
              <br />
              <span className="sm:block text-2xl"> Reach out to us today and book an appointment. </span>
            </h1>
            <br />
            <br />
            <Link to="/contactUs">
            <button className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:from-pink-500 hover:to-yellow-500">
              Make An Appointment
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Datascience;