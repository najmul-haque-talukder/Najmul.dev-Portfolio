import React, { useEffect, useState } from 'react'
import { Card1 } from '../../Components/Card1'

const Section2 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("/Database/services.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className='bg-gray-950 text-white px-4 sm:px-10 md:px-20 lg:px-50 text-center'>
            <div className='py-10'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-center'>What I Do?</p>
                <p className='max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base text-gray-300 pt-3'>
                    I create modern and responsive web experiences that feel smooth, fast, and user-friendly.
                    My focus is to turn ideas into clean, functional interfaces using React, Next.js, and Tailwind.
                    I love helping people and brands bring their digital vision to life.
                </p>
            </div>

            <div className='pb-20'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {data.map(item => (
                        <Card1
                            key={item.id}
                            title={item.title}
                            desc={item.description}
                            id={item.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section2
