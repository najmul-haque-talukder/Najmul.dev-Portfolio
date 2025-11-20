import React from "react";
import DarkVeil from "../../Components/DarkVeli";
import img from "/ikd.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover mb-30">
      <DarkVeil />

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full px-6 sm:px-14 lg:px-50">

        {/* BORDER WRAPPER */}
        <div className="border border-white/25 mt-60 md:mt-30 rounded-2xl p-10 sm:p-14 lg:px-10 backdrop-blur-sm bg-black/20 shadow-xl">

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src={img}
              className="rounded-full w-32 sm:w-40 md:w-48 border-4 border-white object-cover"
            />

            <div className="text-center md:text-left max-w-3xl">
              <p className="font-semibold text-3xl sm:text-3xl lg:text-3xl">
                Najmul Haque Talukder
              </p>
              <p className="text-base sm:text-lg text-gray-300">Frontend Developer</p>

              <p className="pt-5 text-sm sm:text-base text-gray-200 leading-relaxed">
                I’m Najmul Haque Talukder — a Frontend Developer who builds fast,
                scalable, and visually modern web interfaces using React, Next.js,
                JavaScript, Tailwind CSS, and Redux. I focus on crafting clean UI,
                smooth experiences, and reusable component architectures.
              </p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="text-white flex flex-col sm:flex-row gap-5 pt-12 items-center justify-center">

            {/* Dashed border button 1 */}
            <a
              href="https://drive.google.com/drive/folders/1TcZZQ2z7IuSq-csqez64Xd9uveK9hH9d?usp=sharing"
              target="_blank"
              className="text-black bg-white px-7 py-3 rounded-full text-sm sm:text-base border border-dashed border-gray-300 hover:scale-105 hover:bg-white/80 duration-300"
            >
              Download Resume <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>

            {/* Dashed border button 2 */}
            <a
              href="https://github.com/najmul-haque-talukder"
              target="_blank"
              className="px-7 py-3 rounded-full text-sm sm:text-base border  border-gray-300 hover:text-white hover:bg-white/10 duration-300"
            >
              Find out More <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>

          <p className="text-center text-gray-300 text-xs sm:text-sm pt-7">
            Developer obsessed with performance, clean architecture, and smooth user experience.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Hero;
