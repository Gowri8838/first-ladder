import React from "react";
import study from "../components/assets/background.jpeg";
import mission from "../components/assets/mission.jpg";
import grp1 from "../components/assets/grp1.png";
import uk from "../components/assets/uk.jpg";
import canada from "../components/assets/canada.jpeg";
import singapore from "../components/assets/singapore.jpg";
import australia from "../components/assets/australia.jpeg";
import usa from "../components/assets/usa.jpeg";
import swizer from "../components/assets/swizer.jpg";
import germany from "../components/assets/germany.jpeg";
import belgium from "../components/assets/belgium.jpeg";
import malaysia from "../components/assets/malaysia.jpeg";
import { Link } from "react-router-dom";


const StudyAbroad = () => 
{
    return(
        <>     
              {/* study abroad  */}
      <div className="relative">
        <img src={study} alt="" className="w-full h-[400px] object-cover mt-24" />
      </div>
      <div className="px-4 md:px-0 md:max-w-2xl md:mx-auto">
        <h2 className="text-blue-500 font-bold text-2xl md:text-3xl text-center mt-5 font-serif">
          Study Abroad / Overseas Education 
        </h2>
        <h4 className="mt-5 text-lg md:text-base text-black text-center">
          Are you looking for reliable immigration consultants to handle your
          immigration case? Our certified and reliable Immigration Consultant
          professionals can help you get a positive decision on your case! We
          provide services in all different areas of immigration.
        </h4>
      </div>

      {/* vision & mission */}
      <div className="flex flex-col items-center md:flex-row justify-center mt-10">
        <img
          src={mission}
          alt=""
          className="h-60 w-96 mt-5 md:mr-5 rounded-lg shadow-xl"
        />
        <div className="md:ml-5">
          <h2 className="text-blue-500 font-bold text-2xl md:text-3xl font-italic mt-5 md:mt-0 text-center md:text-left font-serif">
            Our Vision And Mission
          </h2>
          <h4 className="mt-5 text-2xl md:text-base text-center md:text-left">
            Empower through education. First Ladder envisions fostering tax
            expertise.
          </h4>
          <h4 className="mt-2 text-2xl md:text-base   text-center md:text-left">
            Our mission is to shape Enrolled Agents, fueling their success in
            the field of taxation.
          </h4>
        </div>
      </div>

      {/* looking study abroad para  */}
      <div className="relative mt-10 md:mt-20">
        <img src={grp1} alt="" className="w-full h-[400px] md:h-[350px] rounded-lg " />

        <div className="absolute top-0 left-0 md:ml-10 md:top-10">
          <h2 className="text-4xl md:text-6xl text-white font-serif">
            Looking To Study Abroad?
          </h2>
          <h3 className="mt-4 md:mt-7 text-xl md:text-3xl text-white font-bold">
            You see lots of ads in magazines and on TV, but do you know if they are the right places for you?
          </h3>
          <h3 className="mt-2 text-lg md:text-xl text-white font-semibold">
            Study abroad is becoming more common but students are increasingly overwhelmed. The process of studying abroad is not as simple as it seems. We provide comprehensive study abroad assistance to help you make the right choices when applying for higher education programs. Our service will assist you with every step of your study abroad journey from application, information on tuition costs, locations, and course durations, as well as reviews from students currently studying there, on arrival assistance, all under one roof.
          </h3>
        </div>
      </div>


      <h2 className="text-3xl md:text-4xl mt-5 md:mt-10 text-center text-blue-500 font-bold font-serif">
        Looking To Study Abroad?
      </h2>



      <div className="flex flex-wrap justify-center mt-10">
        {/* Country Cards */}
        {[
          { img: uk, alt: "UK", text: "Study in UK",},
          { img: australia, alt: "Australia", text: "Study in AUSTRALIA", },
          { img: canada, alt: "Canada", text: "Study in CANADA" },
          { img: usa, alt: "USA", text: "Study in USA" },
          { img: singapore, alt: "Singapore", text: "Study in SINGAPORE" },
          { img: swizer, alt: "Switzerland", text: "Study in SWIZERLAND" },
          { img: germany, alt: "Germany", text: "Study in GERMANY" },
          { img: belgium, alt: "Belgium", text: "Study in BELGIUM" },
          { img: malaysia, alt: "Malaysia", text: "Study in MALAYSIA" }
        ].map((country, index) => (
          <div key={index} className="mt-8 mx-4 sm:w-72 md:w-96">
            <div className="relative">
              <img src={country.img} alt={country.alt} className="h-60 w-full sm:h-40 md:h-60 object-cover shadow-xl" />
            </div>
            <div className="text-center">
                <h3 className="text-white text-xl mt-2 font-semibold bg-black w-full italic p-2">{country.text}</h3>
           
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center mb-4 ml-9 mt-10 mr-9 bg-gray-100 rounded-lg shadow-lg md:scroll-sm">
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



      {/* CHANGE YOUR LIFE  */}
      {/* <div class="text-blue-500 font-bold text-3xl text-center mt-20 font-serif md:mt-10 md:text-4xl">
        <h2>Change Your Life Now!</h2>
        <p class="text-black mt-5">Reach out to us</p>
      </div>

      {/* SUBMIT */}
      {/* <div class="bg-gray-100 mt-10 md:mt-5 h-80">
        <form action="" class="flex flex-col items-center">
          <div class="flex flex-col md:flex-row justify-center items-center">
            <label for="name" class="ml-5 md:ml-20 mt-5 md:mt-10 p-2 text-2xl font-serif">Name</label>
            <input type="text" name="name" id="name" class="mt-5 md:mt-10 rounded-lg h-10 w-80 md:ml-5" />

            <label for="email" class=" md:ml-10 mt-5 md:mt-10 p-2 text-2xl font-serif">Email</label>
            <input type="text" name="email" id="email" class="mt-5 md:mt-10 rounded-lg h-10 w-60 md:ml-5" />
          </div>

          <div class="flex flex-col md:flex-row justify-center items-center mt-5">
            <label for="services" class="ml-5 md:ml-20 mt-5 md:mt-10 p-2 text-2xl font-serif">Choose Services</label>
            <select name="services" id="services" class="mt-5 md:mt-10 rounded-lg h-12 md:w-[600px] md:ml-5">
              <option value="">select</option>
              <option value="Overseas Education">Overseas Education</option>
              <option value="Engineering jobs">Engineering jobs</option>
              <option value="Training & placement">Training & placement</option>
              <option value="Immigration">Immigration</option>
              <option value="Campus Recruitment">Campus Recruitment</option>
            </select>
          </div>

          <div class="h-20 flex justify-center items-center">
            <div class="bg-sky-500 mt-5 md:mt-10 w-48 text-black text-center hover:text-white h-12 cursor-pointer rounded-lg">
              <input type="button" value="Submit" class="mt-2 text-2xl" />
            </div>
          </div>
        </form> */} 
      {/* </div> */}

      <br />
    </>
  )

}

export default StudyAbroad;