import { Link } from "react-router";
import DarkVeil from "../Components/DarkVeli";
import Header from "../Components/Header";
import Section2 from "./PagesComponent/Section2";
import Section3 from "./PagesComponent/Section3";
import Section4 from "./PagesComponent/Section4";
import Section5 from "./PagesComponent/Section5";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-950">
      {/* Main Content */}
      <div className="-translate-y-25 w-full min-h-screen max-h-[1000px] bg-gray-950">
        <DarkVeil />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>

      {/* Navbar */}
      <div className="absolute -top-20 left-0 w-full z-10">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="absolute top-[14%] left-1/2 transform -translate-x-1/2 z-20 w-full px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center text-center text-white pb-5">
          <p className="px-4 py-1 rounded-full text-blue-400 bg-blue-950 mb-2 lg:mb-0">Hello</p>
          <p>I tell stories through code. Come see my work.</p>
        </div>

        <div>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <img
              src="/src/assets/naj-dp.jpg"
              className="rounded-full w-20 border-4 border-white object-cover"
            />
            <div>
              <p className="font-semibold text-2xl sm:text-xl md:text-xl lg:text-3xl xl:text-4xl text-center md:text-left">Najmul Haque Talukder</p>
              <p className="text-center md:text-left">Frontend Developer</p>
            </div>
          </div>

          <p className="pt-5 text-center text-gray-200 max-w-xl mx-auto">
            I’m Najmul Haque Talukder — a Frontend Developer who builds fast, scalable, and visually modern web interfaces using React, Next.js, JavaScript, Tailwind CSS, and Redux.
            I focus on crafting clean UI, smooth user experiences, and reusable component architectures.
            My goal is to create modern, high-performance websites that look great and feel effortless to use.
          </p>
        </div>

        {/* Buttons */}
        <div className="text-white flex flex-col sm:flex-row gap-5 pt-10 items-center justify-center">
          <a
            href="https://drive.google.com/drive/folders/1TcZZQ2z7IuSq-csqez64Xd9uveK9hH9d?usp=sharing"
            target="_blank"
            className="bg-white text-black px-5 py-2 rounded-full hover:scale-105 duration-300 hover:bg-white/80 mb-3 sm:mb-0"
          >
            Download Resume <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <a
            href="https://github.com/najmul-haque-talukder"
            target="_blank"
            className="border border-gray-200 rounded-full px-5 py-2 hover:bg-gray-800 hover:text-white duration-300"
          >
            Find out More <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
