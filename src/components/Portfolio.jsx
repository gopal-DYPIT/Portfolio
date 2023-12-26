import React from "react";
import project1 from "../assets/portfolio/project1.png";
import WeatherApi from "../assets/portfolio/project5.png";
import urlshortner from "../assets/portfolio/project3.png";
import personalPortfolio from "../assets/portfolio/project2.png";
import TicTacToe from "../assets/portfolio/project4.png";
import stopWatch from "../assets/portfolio/project6.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      website: "https://gopal-dypit.github.io/Eduhub.in/",
      code: "https://github.com/gopal-DYPIT/Eduhub.in",
    },
    {
      id: 2,
      src: personalPortfolio,
      website: "https://www.google.com/",
      code:"",
    },
    {
      id: 3,
      src: urlshortner,
      website: "https://gopal-dypit.github.io/Url-Shortner/",
      code: "https://github.com/gopal-DYPIT/Url-Shortner",

    },
    {
      id: 4,
      src: TicTacToe,
      website: "https://gopal-dypit.github.io/TIC_TAC_TOE-/",
      code: "https://github.com/gopal-DYPIT/TIC_TAC_TOE-",

    },
    {
      id: 5,
      src: WeatherApi,
      website: "https://gopal-dypit.github.io/weatherAPI/",
      code: "https://github.com/gopal-DYPIT/weatherAPI",

    },
    {
      id: 6,
      src: stopWatch,
      website: "https://gopal-dypit.github.io/StopWatch/",
      code: "https://github.com/gopal-DYPIT/StopWatch",
    },
  ];

  return (
    <div
    name="portfolio"
    className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, website, code }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
              <a href={`${website}`} target="_blank" rel="noreferrer">
                Demo
                </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <a href={`${code}`} target="_blank" rel="noreferrer">
                Code
                </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
