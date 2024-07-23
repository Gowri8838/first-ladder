import React from "react";
import image from "../components/assets/full.png";
import full1 from "../components/assets/full1.png";
import { FaHtml5 } from "react-icons/fa";
import { Link } from "react-router-dom";

const Fullstack = () => {
  return (
    <>
      <div className="gap-10 flex items-center justify-center w-full relative">
        <img src={image} alt="" className="w-full h-[800px]" />
        <div className="w-full h-[800px] absolute flex justify-center items-center top-0 left-0 flex-col backdrop-brightness-50">
          <div className="mt-20">
            <h1 className="text-5xl font-bold text-gray-50 mr-[700px] mb-20 ml-20">
              FULL STACK DEVELOPER <span>BOOTCAMP</span>
            </h1>
          </div>
          <ul
            className="text-white
       
       font-bold pl-[100px] mr-[1100px]"
          >
            <li>^ placement Guidance</li>
            <br></br>
            <li>^ Mentors From Top Global Product Companies</li>
            <br></br>
            <li>^ A Portfolio of Real-World Projects</li>
            <br></br>
            <li>^ For Graduates & Working Professionals</li>
          </ul>

          <div class=" bg-white mx-auto w-[470px]  pt-[30px] my-[-300px] mr-[100px] p-14 mb-10 rounded-xl">
            <div class="mx-auto max-w-lg">
              <h1 class="text-center text-2xl font-bold text-blue-500 sm:text-3xl">
                Change Your Life Now!
              </h1>

              <p class="mx-auto mt-4 max-w-md text-center text-gray-500"></p>

              <form
                action="flex justify-start"
                class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-12"
              >
                <p class="text-center   text-blue-500 text-lg font-medium">
                  {" "}
                  Reach out yours
                </p>

                <div>
                  <label for="email" class="sr-only">
                    Email
                  </label>

                  <div class="relative">
                    <input
                      type="email"
                      class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div>
                  <label for="password" class="sr-only">
                    name
                  </label>

                  <div class="relative">
                    <input
                      type="name"
                      class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Name"
                    />

                    <div></div>
                  </div>
                </div>

                <button
                  type="submit"
                  class="block w-full rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 md:scroll-sm ml-9 mr-9 ">
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src={full1} alt="" className="max-w-full h-auto rounded-lg" />
        </div>
        <div className="bg-gray-200 p-5 flex flex-col justify-center rounded-lg">
          <h3 className="text-3xl font-semibold text-center md:text-left">
            Full stack developer
          </h3>
          <p className="text-md mb-6 mt-6 ml-2 mr-2 text-center md:text-left">
            At First-Ladder, we take pride in offering a comprehensive Enrolled
            Agent (EA) course, designed and developed by experts. Approved and
            certified by IRS (U.S.A), shall be recognized as professional
            certification. Our program is designed to elevate your proficiency
            in tax preparation, strategic planning, and efficient resolution of
            IRS matters.
          </p>
          <p className="text-md mb-6 mt-6 ml-2 mr-2 text-center md:text-left">
            Join us on the path to becoming a skilled Enrolled Agent, and let
            First-Ladder be your trusted partner in advancing your career in
            taxation.”
          </p>
          <Link to="/">
            <button className="flex justify-center mt-8 inline-block rounded border border-sky-600 bg-sky-600 px-12 py-3 text-xl font-bold text-white hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring active:text-sky-500">
              Join now
            </button>
          </Link>
        </div>
      </div>

      <div className="container md:scroll-sm">
        <h1 className="my-8 border-l-8 border-sky-600 py-2 pl-2 text-3xl font-bold ml-[650px]">
          Key Frams
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-8">
          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <FaHtml5 className="h-40 mr-2 " />
            <p className="text-md">Interview Preparation</p>
          </div>

          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <FaHtml5 className="h-12 mr-2" />
            <p className="text-md">Letter of Recommendation Guidance</p>
          </div>
          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <FaHtml5 className="h-12 mr-2" />
            <p className="text-md">Letter of Recommendation Guidance</p>
          </div>
          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <FaHtml5 className="h-12 mr-2" />
            <p className="text-md">Profile Analysis</p>
          </div>
          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <FaHtml5 className="h-12 mr-2" />
            <p className="text-md">Scholarship & Financial Aid Advice</p>
          </div>
          <div className="flex items-center bg-sky-200 p-8 rounded-lg">
            <FaHtml5 className="h-40 mr-2" />
            <p className="text-md">SAT & IELTS Prep</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fullstack;
