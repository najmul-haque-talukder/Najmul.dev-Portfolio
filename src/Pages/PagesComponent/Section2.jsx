import React, { useEffect, useState } from 'react'
import { Card1 } from '../../Components/Card1'

const Section2 = () => {

    const [data, setData] = useState([])


    useEffect(()=>{
        fetch("/Database/services.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[])



  return (
    <div className='bg-gray-950 text-white px-50 text-center'>
        <div>
            <div>
                <div className='py-10'>
                    <p className='text-5xl font-semibold text-center'>What I Do?</p>
                    <p className='w-160 text-sm text-gray-300 mx-auto pt-3'>I create modern and responsive web experiences that feel smooth, fast, and user-friendly.My focus is to turn ideas into clean, functional interfaces using React, Next.js, and Tailwind. I love helping people and brands bring their digital vision to life.</p>
                </div>

                <div>
                    <div className='grid grid-cols-3 gap-4 pb-20'>
                        {
                            data.map((item)=>(
                                <Card1 title={item.title} desc={item.description} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Section2