import React, { useEffect, useState } from 'react'
import Card2 from '../../Components/Card2'

const Section3 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/Database/techstack.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='bg-black text-white'>
            <div className='py-10 px-4 sm:px-10 md:px-20 lg:px-50'>
                <p className='text-center text-2xl sm:text-3xl md:text-4xl font-semibold'>My Tech Stack</p>
                <p className='text-sm sm:text-base text-gray-300 text-center max-w-xl sm:max-w-2xl mx-auto pt-3'>
                    These are the tools and technologies I use every day to build clean, fast, and modern web experiences.
                    I love exploring new tech and improving my skills with every project.
                    With this stack, I turn ideas into smooth and responsive user interfaces.
                </p>
            </div>

            <div className='px-4 sm:px-10 md:px-20 lg:px-50 pb-20'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  gap-6'>
                    {data.map(item => (
                        <Card2
                            key={item.id}
                            name={item.name}
                            icon={item.icon}
                            desc={item.description}
                            id={item.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section3
