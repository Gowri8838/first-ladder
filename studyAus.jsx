import React from "react";
import ukGrp from "../components/assets/s1.jpeg";
import grp1 from "../components/assets/grp1.png";
import aus from "../components/assets/aus aus.jpeg";
import unsw from "../components/assets/unsw aus.jpeg";
import vienna from "../components/assets/vienna aus.jpeg";
import v2 from "../components/assets/v2.png";
import unsw3 from "../components/assets/unsw3.png";
import aus01 from "../components/assets/aus01.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const StudyAus = () => {
  const [imageindex, setimageindes] = useState(0);
  const imagearray = [unsw3, v2, aus01];

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
      duration: 1000, // Change duration as per your requirement
    });
  }, []);

  return (
    <>
      <div className="sm:mt ">
      
          <div>
            {/* <img style={{ width: "100%" }} src={aus1} alt="" className='h-64 ' /> */}
            {/* <img style={{ width: "100%" }} src={imagearray[imageindex]} alt="" className='scroll-smooth w-full h-[300px]' /> */}
          </div>

          <div className="container-fluid bg-img" id="home">
            <div className="container home relative ">
               <img
               
                src={imagearray[imageindex]}
                alt=""
                className="scroll-smooth  h-[400px] relative w-full mt-20"
              />
              <div className="row absolute  inset-0">
                <div className="col-lg-12 heading text-center text-white text-7xl mt-20">
                  <h6 data-aos="fade-up">STUDY </h6>
                </div>
                <div className="col-lg-12 heading text-center text-white mt-5">
                  <h6 data-aos="fade-up">IN</h6>
                </div>
                <div className="col-lg-12 heading text-center mt-10 text-blue-500 font-bold text-7xl">
                  <h1 data-aos="fade-up">AUSTRALIA!!!</h1>
                </div>
                {/* <div className="col-lg-12 heading text-center text-white">
                        <h3 data-aos="fade-up">front-end developer</h3>
                    </div> */}
              </div>
            </div>
          </div>
          <div className="bg-blue-50 h-60">
          <div className="flex">
            <div className="sm:mr-4 pt-10 pb-5">
              <img
                src={ukGrp}
                alt=""
                className="w-full mr-10 sm:w-auto h-40 mx-auto sm:ml-10 shadow-lg rounded-lg"
              />
            </div>
            <div className="sm:mr-4 sm:mt-0">
              <h2 className="text-blue-500 flex justify-center mr-40 font-bold text-3xl font-italic  sm:mt-10 text-center sm:text-left font-serif">
                Study in AUSTRALIA
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
          Australia Study Options
        </h2>

        <div className="flex flex-col sm:flex-row pl-10">
          <div className="flex flex-wrap justify-center sm:justify-start sm:w-full">
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-white cursor-pointer">
              Foundation Courses London
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-white cursor-pointer">
              Undergraduate
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-white cursor-pointer">
              Pre-Masters
            </h3>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start sm:w-full">
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-white cursor-pointer">
              Postgraduate and Master's
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-white cursor-pointer">
              PhD and Research Degrees
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-white cursor-pointer">
              Two-year Degree
            </h3>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start sm:w-full">
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-white cursor-pointer">
              English Courses
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-white cursor-pointer">
              A-Levels
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-white cursor-pointer">
              Colleges
            </h3>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start sm:w-full">
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-white cursor-pointer">
              Study Abroad
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 sm:mr-10 text-center sm:text-left hover:text-white cursor-pointer">
              Distance-Learning
            </h3>
            <h3 className="bg-blue-400 text-lg p-2 font-serif w-80 mt-5 sm:mt-10 ml-0 text-center sm:text-left hover:text-white cursor-pointer">
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
           AUSTRALIA
          </h2>
        </div>
        <div className="pl-20 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:mr-10">
          {/* uk university  */}
          <div className="">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-xl h-auto sm:h-[420px] w-auto sm:w-[400px] mt-5 sm:mt-12 hover:p-3">
              <img
                src={aus}
                alt=""
                className="w-full h-48 sm:h-[200px] object-cover rounded-t-lg"
              />
              <div className="px-6 py-4 ">
                <h1 className="font-bold text-blue-500 text-2xl text-center ">
                  Cambridge University
                </h1>
                <p className="text-center mt-3">
                  Arts and Humanities
                  <br />
                  Biological Sciences
                  <br />
                  Clinical Medicine
                  <br />
                  Humanities and Social Sciences
                  <br />
                  Physical Sciences
                  <br />
                  Technology
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-sm rounded-lg overflow-hidden shadow-xl h-auto sm:h-[420px] w-auto sm:w-[400px] mt-5 sm:mt-12 hover:p-3">
            <img
              src={unsw}
              alt=""
              className="w-full h-48 sm:h-[200px] object-cover rounded-t-lg"
            />
            <div className="px-6 py-4">
              <h1 className="font-bold text-blue-500 text-2xl text-center">
                London University
              </h1>
              <p className="text-center mt-3">
                University of London International Programmes
                <br />
                Between 1946 and 1970, the university entered into 'schemes of
                special relation' with university colleges in the Commonwealth
                of Nations.
              </p>
            </div>
          </div>

          <div className=" ">
            <div className="max-w-sm rounded-lg overflow-hidden shadow-xl h-auto sm:h-[420px] w-auto sm:w-[400px] mt-5 sm:mt-12 hover:p-3 ">
              <img
                src={vienna}
                alt=""
                className="w-full h-48 sm:h-[200px] object-cover rounded-t-lg"
              />
              <div className="px-6 py-4">
                <h1 className="font-bold text-blue-500 text-2xl text-center">
                  Oxford University
                </h1>
                <p className="text-center mt-3">
                  In common with most British universities, prospective
                  undergraduate students apply through the UCAS application
                  system, but prospective applicants for the University of
                  Oxford, along with those for medicine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyAus;
