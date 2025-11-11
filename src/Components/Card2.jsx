import React from 'react'

const Card2 = ({name, icon, desc}) => {
  return (
    <div className='p-2 border border-gray-300 rounded-lg hover:scale-101 duration-900'>
        <div className='bg-white/10 rounded-lg p-4'>
            <div className='text-white'>
                <img src={icon} className='w-20 pb-5' />
                <p className='text-3xl font-semibold pb-2'>{name}</p>
                <p className='text-gray-300'>{desc}</p>
            </div>
        </div>
    </div>
  )
}

export default Card2