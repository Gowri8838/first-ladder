
import React from "react";
import env from "../components/assets/envban2.png";

function ETA() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat w-full"
      >
        <div
          className="flex absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto mt-[40px] max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right lg:max-w-lg">
            <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
              GET STARTED WITH
              <strong className="block font-extrabold text-sky-700">
                ENROLLED AGENT TRAINING
              </strong>
            </h1>

            <p className="mt-4 ml-[30px] max-w-lg sm:text-lg md:text-xl sm:mt-6 md:mt-8 lg:max-w-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga
              ducimus numquam ea!
            </p>

            <div className="pt-[50px] pl-[80px]  flex flex-wrap gap-4 text-center sm:justify-start sm:ml-[0%]  sm:mt-[30px] md:gap-6 lg:gap-8 lg:flex-wrap lg:justify-start">
              <a
                href=""
                className="block w-full rounded bg-sky-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href=""
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-sky-400 shadow hover:text-sky-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-[40px] lg:ml-[60px] lg:mt-0 lg:w-1/2">
            <img
              src={env}
              alt="banner"
              title="Join EAT"
              className="h-[550px] w-full mt-[10px] rounded-3xl lg:h-auto"
            />
          </div>
        </div>
      </section>

      {/* body */}
     


<div className="">
  <div className="bg-sky-200 h-[300px] w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20"> 
    <div className="flex justify-center py-6 sm:py-8"> 
      <strong className="text-2xl sm:text-3xl md:text-4xl text-sky-900 underline"> 
        Introduction
      </strong>
    </div>

    <div className="flex justify-center items-center"> 
      <div className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-center"> 
        <p>
          At First-Ladder, we take pride in offering a comprehensive Enrolled Agent (EA) course, designed and developed by experts. Approved and certified by the IRS (U.S.A), it is recognized as a professional certification. Our program is designed to elevate your proficiency in tax preparation, strategic planning, and efficient resolution of IRS matters.
        </p>
        <p className="mt-4">
          Join us on the path to becoming a skilled Enrolled Agent, and let First-Ladder be your trusted partner in advancing your career in taxation.
        </p>
      </div>
    </div>
  </div>



  <div className="bg-white h-[1000px]">

  <div className="flex flex-col sm:flex-row mt-12 w-full"> 
    <div className="p-2 sm:p-10 md:p-16 lg:p-20  "> 
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-sky-800 max-w-lg sm:text-xl/relaxed ">Benefits of EA</h1>
    </div>

    <div className="hidden sm:block border-2 border-current h-27 mx-4 my-4 sm:my-0 text-sky-900"> 
    </div>

    <div className="flex-1 p-4 sm:px-8 text-sm sm:text-base md:text-lg lg:text-xl">
      <p>
        At First-Ladder, we take pride in offering a comprehensive Enrolled Agent (EA) course, designed and developed by experts. Approved and certified by the IRS (U.S.A), it is recognized as a professional certification. Our program is designed to elevate your proficiency in tax preparation, strategic planning, and efficient resolution of IRS matters.
      </p>
    </div>
  </div>
</div>
</div>



    </>
  );
}

export default ETA;
