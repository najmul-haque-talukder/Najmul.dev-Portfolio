import React, { useEffect, useState } from "react";

const Section4 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/Database/education.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-gray-950 text-white">
      <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold pb-3">
            Educational Background
          </p>
          <p className="text-gray-300 text-sm sm:text-base text-center max-w-md sm:max-w-2xl mx-auto leading-relaxed">
            Those mornings at Biddyaapith, the laughter and stories in the classrooms,
            and the time spent with friends are memories I’ll always cherish.
            The little victories, curiosity, and joy of learning are moments that can never be forgotten.
            <br />
            <span className="font-semibold text-gray-100">
              Now, I’d like to share with you all a little about my Biddyaapith and my study life.
            </span>
          </p>
        </div>
        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {data.map((item) => (
            <div key={item.id} className="flex h-full">
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-5 sm:p-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between w-full min-h-[270px]">
                <p className="border-b border-gray-700 pb-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
                <div className="py-4 flex flex-col md:flex-row gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.institution}
                    className="rounded-full w-14 sm:w-16 md:w-20 object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="text-base sm:text-lg md:text-xl font-semibold">
                      {item.institution}
                    </p>
                    <p className="text-sm sm:text-base text-gray-400">{item.degree}</p>
                    <p className="text-sm sm:text-base text-gray-400">{item.department}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section4;
