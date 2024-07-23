import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../components/assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { FaCaretDown } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

const dropdownLinks = [
  {
    name: "Study in UK",
    link: "/studyAbroad/studyUK",
  },
  {
    name: "Study in AUSTRALIA",
    link: "/studyAbroad/studyAUSTRALIA",
  },
  {
    name: "Study in CANADA",
    link: "/studyAbroad/studyCANADA",
  },
  {
    name: "Study in USA",
    link: "/studyAbroad/studyUSA",
  },
  {
    name: "Study in SINGAPORE",
    link: "/studyAbroad/studySINGAPORE",
  },
  {
    name: "Study in SWIZERLAND",
    link: "/studyAbroad/studySWIZERLAND",
  },
  {
    name: "Study in GERMANY",
    link: "/studyAbroad/studyGERMANY",
  },
  {
    name: "Study in MALAYSIA",
    link: "/studyAbroad/studyMALAYSIA",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 right-0 w-full bg-white backdrop-blur-sm text-black shadow-md z-[99999]">
        <div className="bg-sky-500 text-white ">
          <div className="container py-[2px] sm:block hidden">
            <div className="flex items-center">
              <div className="flex flex-row ">
                <FaPhoneSquareAlt className="mt-1 cursor-pointer" />
                <p className=" mr-4 cursor-pointer">+918300941219</p>
                <IoMdMail className="ml-3 mt-1 cursor-pointer" />
                <p className="cursor-pointer">hr@firstladder.com</p>
              </div>
              <div className="container py-[2px] sm:block hidden ">
                <div className="flex items-center  justify-center ml-[90%] cursor-pointer">
                  <RiFacebookBoxLine size={33} className="mx-1 " />
                  <FaInstagram size={27} className="mx-1" />
                  <CiLinkedin size={33} className="mx-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src={logo} alt="" className=" h-18 w-[200px]" />
              </Link>
            </div>
            {/* Navlinks section */}
            {/* <div className="md:hidden block">
              Mobile Hamburger Menu
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div> */}
            <div className="hidden md:block">
              {/* Navigation Links for medium and larger screens */}
              <ul className="flex items-center gap-6">
                <li className="py-4 hover:text-sky-500">
                  <NavLink
                    to="/"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="py-4 hover:text-sky-500">
                  <NavLink
                    activeClassName="active"
                    to="/aboutUs"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="py-4 hover:text-sky-500">
                  <NavLink
                    activeClassName="active"
                    to="/trainingPrograms"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Training Programs
                  </NavLink>
                </li>

                {/* Dropdown section */}

                <li className="py-4 relative group cursor-pointer hover:text-sky-500">
                  <div className="dropdown flex items-center">
                    <span>
                      <NavLink
                        activeClassName="active"
                        to="/studyAbroad"
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        Study Abroad
                      </NavLink>
                    </span>
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className="absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-black bg-white p-2">
                    <ul className="w-64 h-70">
                      {" "}
                      {/* Adjust width and height here */}
                      {dropdownLinks.map((data) => {
                        return (
                          <li key={data.name}>
                            <Link to=   {data.link}  className="inline-block w-full rounded-md p-2 hover:bg-sky-500 hover:text-white">
                             
                              {data.name}
                              </Link>
                            
                            
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>

                <li className="py-4 hover:text-sky-500">
                  <NavLink
                    activeClassName="active"
                    to="/immigration"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Immigration
                  </NavLink>
                </li>
                <li className="py-4 hover:text-sky-500">
                  <NavLink
                    activeClassName="active"
                    to="/blog"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="py-4 hover:text-sky-500">
                  <NavLink
                    activeClassName="active"
                    to="/contactUs"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to="/contactUs">
              <button className="bg-sky-500 text-white hover:bg-transparent hover:border-sky-500 hover:text-sky-500 font-size-2 border border-sky-500 px-3 py-1 rounded-full">
                Explore Now
              </button>
            </Link>
            <div className="md:hidden block">
              {/* Mobile Hamburger Menu */}
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
