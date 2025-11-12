import React from 'react'

const Card2 = ({ name, icon, desc, id }) => {
  return (
    <div 
      className='p-2 border border-gray-300 rounded-lg hover:scale-102 duration-700 w-full sm:w-auto' 
      key={id}
    >
      <div className='bg-white/10 rounded-lg px-5 py-7 h-full'>
        <div className='text-white flex flex-col items-start space-y-3'>
          
          <img src={icon} className='w-16 sm:w-20 pb-1' alt={name} />

          <p className='text-2xl sm:text-3xl font-semibold'>
            {name}
          </p>

          <p className='text-gray-300 text-sm sm:text-base leading-6'>
            {desc}
          </p>

        </div>
      </div>
    </div>
  )
}

export default Card2
