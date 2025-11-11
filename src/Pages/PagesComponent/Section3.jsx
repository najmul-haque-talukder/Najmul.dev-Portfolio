import React, { useEffect, useState } from 'react'
import Card2 from '../../Components/Card2'

const Section3 = () => {

    const [data, setData] = useState([])


    useEffect(()=>{
        fetch("/Database/techstack.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[])


  return (
    <div className='bg-black'>
        <div>
            <div>
                <div className='py-10'>
                    <p className='text-center text-3xl font-semibold text-white'>My Tech Stack</p>
                    <p className='text-sm text-gray-300 text-center w-160 mx-auto'>These are the tools and technologies I use every day to build clean, fast, and modern web experiences. I love exploring new tech and improving my skills with every project. With this stack, I turn ideas into smooth and responsive user interfaces.</p>
                </div>



                <div className='px-50 pb-20'>
                    <div className='grid grid-cols-2 gap-7'>
                        {
                            data.map((item)=>(
                                <Card2 name={item.name} icon={item.icon} desc={item.description} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section3