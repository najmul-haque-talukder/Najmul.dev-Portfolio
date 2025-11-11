import React, { useEffect, useState } from "react";

const Section4 = () => {

    const [data, setData] = useState([])
    useEffect(()=>(
        fetch("/Database/education.json")
        .then(res => res.json())
        .then(data => setData(data))
    ),[])


  return (
    <div className="bg-gray-950 text-white">

      <div>
        <div className="py-20">

          <div>
            <p className="text-center text-3xl font-semibold pb-3">Educational Background</p>
            <p className="text-gray-300 w-200 text-sm text-center mx-auto">Those mornings at Biddyaapith, the laughter and stories in the classrooms, and the time spent with friends are memories I’ll always cherish. The little victories, curiosity, and joy of learning are moments that can never be forgotten. <br /><span className="font-semibold text-gray-100">Now, I’d like to share with you all a little about my Biddyaapith and my study life.</span></p>
          </div>

          <div className="px-50 py-10">
            <div className="grid grid-cols-2">
                {
                    data.map(item=>(
                        <div>
                            <div className="bg-gray-900 p-5 border border-gray-400">
                                <p className="border-b border-gray-700 pb-2">{item.description}</p>

                                <div className="py-3 flex gap-3 items-center">
                                    <img src={item.image} className="rounded-full w-20" />
                                    <div>
                                        <p className="text-lg font-semibold">{item.institution}</p>
                                        <p className="text-sm text-gray-300">{item.degree}</p>
                                        <p className="text-sm text-gray-300">{item.department}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Section4;
