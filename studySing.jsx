import React from "react";
import ukGrp from "../components/assets/s1.jpeg";
import grp1 from "../components/assets/grp1.png";
import national from "../components/assets/national uni sing.jpeg";
import peking from "../components/assets/peking sing.jpeg";
import namyang from "../components/assets/namyang sing.jpeg";
import sing2 from "../components/assets/sing2.png";
// import grp1 from "../component/image/grp1.png";
import g2 from "../components/assets/g2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from "react";

const StudySing = () => {
  const [imageindex, setimageindes] = useState(0);
  const imagearray = [sing2, g2];

  useEffect(() => {
    const interval = setInterval(() => {
      setimageindes(
        (prev) => (prev + imagearray.length + 1) % imagearray.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [imagearray]);

  useEffect(() => {
    AOS.init({
        duration: 1000 // Change duration as per your requirement
    });
}, []);

  return (
    <>
      <div className="sm:mt">
        <div className="pb-5">
          <div>
            {/* <img style={{ width: "100%" }} src={uk} alt="" className='h-64 opacity-80' /> */}
            {/* <img
              style={{ width: "100%" }}
              src={imagearray[imageindex]}
              alt=""
              className="scroll-smooth w-full h-[400px]"
            /> */}
          </div>

          <div className="container-fluid bg-img" id="home">
         <div className="container home relative">
            {/* <img src={aus01} alt="Background" className="absolute inset-0 w-full h-full object-cover" /> */}
            <img
              style={{ width: "100%" }}
              src={imagearray[imageindex]}
              alt=""
              className="scroll-smooth w-full h-[400px] relative   object-cover mt-28"
            />
                <div className="row absolute  inset-0">
                    <div className="col-lg-12 heading text-center text-white text-7xl mt-20">
                        <h6 data-aos="fade-up">STUDY </h6>
                     </div>
                     <div className="col-lg-12 heading text-center text-white mt-5">
                        <h6 data-aos="fade-up">IN</h6>
                    </div>
                    <div className="col-lg-12 heading text-center mt-10 text-blue-500 font-bold text-7xl">
                        <h1 data-aos="fade-up">SINGAPORE!!!</h1>
                    </div>
                    {/* <div className="col-lg-12 heading text-center text-white">
                        <h3 data-aos="fade-up">front-end developer</h3>
                    </div> */}
                  
                </div>
            </div>
        </div>
          <div className="flex flex-col sm:flex-row items-center bg-blue-50 mt-4 h-[280px]">
            <div className="sm:mr-4 pt-10 pb-5">
              <img
                src={ukGrp}
                alt=""
                className="w-full mr-10 sm:w-auto h-40 mx-auto sm:ml-10 shadow-lg rounded-lg"
              />
            </div>
            <div className="sm:mr-4 sm:mt-0">
              <h2 className="text-blue-500 flex justify-center mr-40 font-bold text-3xl font-italic   text-center sm:text-left font-serif">
                Study in SINGAPORE
              </h2>
              <p className="text-lg mt-3 pl-20  text-justify sm:mt-5 text-center sm:text-left">
                At First-Ladder, we take pride in offering a comprehensive
                Enrolled Agent (EA) course, designed and developed by experts.
                Approved and certified by IRS (U.S.A), shall be recognized as
                professional certification. Our program is designed to elevate
                your proficiency in tax preparation, strategic planning, and
                efficient resolution of IRS matters.
              </p>
              <p className="text-lg mt-3 pl-20 text-justify sm:mt-5 text-center sm:text-left">
                Join us on the path to becoming a skilled Enrolled Agent, and
                let First-Ladder be your trusted partner in advancing your
                career in taxation.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-blue-500 font-bold text-3xl font-italic mt-5 sm:mt-10 text-center font-serif">
          SINGAPORE Study Options
        </h2>

        <div className="flex flex-col sm:flex-row pl-10">
          <div className="flex flex-wrap justify-center sm:justify-start sm:w-full">
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              Foundation Courses London
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              Undergraduate
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              Pre-Masters
            </h3>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start sm:w-full">
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              Postgraduate and Master's
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              PhD and Research Degrees
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              Two-year Degree
            </h3>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start sm:w-full">
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              English Courses
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              A-Levels
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              Colleges
            </h3>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start sm:w-full">
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              Study Abroad
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              Distance-Learning
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 text-center sm:text-left hover:text-indigo-900 cursor-pointer">
              Boarding Schools
            </h3>
          </div>
        </div>

        <div class="text-blue-500 font-bold text-3xl text-center mt-20 font-serif md:mt-10 md:text-4xl">
          <h2>Change Your Life Now!</h2>
          <p class="text-black mt-5">Reach out to us</p>
        </div>

        {/* SUBMIT */}
        <div class="bg-gray-100 pb-10 mt-10 md:mt-5">
          <form action="" class="flex flex-col items-center">
            <div class="flex flex-col md:flex-row justify-center items-center">
              <label
                for="name"
                class="ml-5 md:ml-0 mt-5 md:mt-10 p-2 text-2xl font-serif"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="mt-2 md:mt-10 rounded-lg h-10 w-80 md:ml-2 md:mr-2"
              />

              <label
                for="email"
                class="ml-5 md:ml-0 mt-5 md:mt-10 p-2 text-2xl font-serif"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                class="mt-2 md:mt-10 rounded-lg h-10 w-80 md:ml-2 md:mr-2"
              />
            </div>

            <div class="flex flex-col md:flex-row justify-center items-center mt-5">
              <label
                for="services"
                class="ml-5 md:ml-0 mt-5 md:mt-10 p-2 text-2xl font-serif"
              >
                Choose Services
              </label>
              <select
                name="services"
                id="services"
                class="mt-2 md:mt-10 rounded-lg h-12 md:w-[640px] md:ml-2 md:mr-2"
              >
                <option value="">select</option>
                <option value="Overseas Education">Overseas Education</option>
                <option value="Engineering jobs">Engineering jobs</option>
                <option value="Training & placement">
                  Training & placement
                </option>
                <option value="Immigration">Immigration</option>
                <option value="Campus Recruitment">Campus Recruitment</option>
              </select>
            </div>

            <div class="h-20 flex justify-center items-center">
              <input
                type="button"
                value="SUBMIT"
                className="flex justify-center items-center mx-auto text-2xl mt-2 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              />
            </div>
          </form>
        </div>

        <div className="relative mt-20">
          <img src={grp1} alt="" className="w-full mt-5 h-[400px] rounded-xl" />
          <div className="absolute top-10 left-0 md:left-10 md:top-20 lg:top-24">
            <h2 className="text-4xl md:text-6xl text-white font-serif">
              Need a Consultation?
            </h2>
            <h3 className="mt-7 text-xl md:text-3xl text-white font-bold md:w-3/4 lg:w-2/3">
              Reach out to us today and book an appointment for a free
              counseling session to clarify all your queries with our team.
            </h3>
            <button className="bg-blue-100 text-lg p-2 md:p-3 text-center  hover:bg-blue-500 hover:text-white cursor-pointer rounded-lg mt-14 md:mt-20 lg:mt-12">
              Make an Appointment
            </button>
          </div>
        </div>

        <h2 className="text-blue-500 font-bold text-4xl text-center mt-10 font-serif">
          TOP UNIVERSITY HERE!
        </h2>
        <div className="mt-10">
          <h2 className=" bg-blue-200 font-bold py-5 text-3xl flex justify-center items-center">
            Singapore
          </h2>
        </div>
        <div className="pl-20 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:mr-10">
          {/* sing university  */}
          <div className="">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-xl h-auto sm:h-[510] w-auto sm:w-[400px] mt-5 sm:mt-12 hover:p-3">
              <img
                src={national}
                alt=""
                className="w-full h-48 sm:h-[200px] object-cover rounded-t-lg"
              />
              <div className="px-6 py-4">
                <h1 className="font-bold text-blue-500 text-2xl text-center">
                  National Singapore University
                </h1>
                <p className="text-center mt-3">
                  The National University of Singapore (NUS) is a national
                  public collegiate and research university in Singapore. It was
                  officially established in 1980 by the merger of the University
                  of Singapore The university offers degree programmes in
                  disciplines at both the undergraduate and postgraduate levels,
                  including in the sciences, medicine and dentistry, design and
                  environment, law, arts and social sciences, engineering,
                  business, computing, and music
                </p>{" "}
              </div>
            </div>
          </div>

          <div className="max-w-sm rounded-lg overflow-hidden shadow-xl h-auto sm:h-[570px] w-auto sm:w-[400px] mt-5 sm:mt-12 hover:p-3">
            <img
              src={peking}
              alt=""
              className="w-full h-48 sm:h-[200px] object-cover rounded-t-lg"
            />
            <div className="px-6 py-4">
              <h1 className="font-bold text-blue-500 text-2xl text-center">
                Peking University
              </h1>
              <p className="text-center mt-3">
                Peking University (PKU) is a public university in Haidian,
                Beijing, China. It is affiliated with and funded by the Ministry
                of Education of China. The university is part of Project 211,
                Project 985, the Double First-Class Construction, and the C9
                League.Peking University merged with Yenching University after
                the nationwide restructuring of schools and departments in 1952.
                On April 3, 2000, the former Beijing Medical University merged
                into the Peking University.
              </p>
            </div>
          </div>

          <div className=" ">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-xl h-auto sm:h-[570px] w-auto sm:w-[400px] mt-5 sm:mt-12 hover:p-3">
              <img
                src={namyang}
                alt0
                className="w-full h-48 sm:h-[200px] object-cover rounded-t-lg"
              />
              <div className="px-6 py-4">
                <h1 className="font-bold text-blue-500 text-2xl text-center">
                  Namyang University
                </h1>
                <p className="text-center mt-3">
                  Nanyang Technological University (NTU) is a public university
                  in Singapore. Founded in 1981, it is also the second-oldest
                  autonomous university in the country. NTU is frequently ranked
                  within the world's top 30 universities according to most major
                  international rankings, and is widely-considered to be one of
                  the two most prestigious universities in Singapore, the other
                  being the National University of Singapore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudySing;
