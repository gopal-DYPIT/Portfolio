import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="pt-36 md:pt-0 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Web developer
          </h2>
          <p className="text-gray-500 py-6 pb-4 max-w-md md:pb-14">
            I'm currently a third-year engineering student, specializing in web
            development. I am efficient in creating responsive, user-centric
            websites. Explore my portfolio to witness my technical prowess in
            delivering seamless and innovative web solutions.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              // className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-400 to-orange-600 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="pt-8 pb-28 md:flex md:pt-0 md:pb-0">
          <img 
            src={HeroImage}
            alt="my profile"
            // className= "rounded-xl mx-auto w-full h-22"
            className="rounded-2xl mx-auto w-4/6 md:max-w-17xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
