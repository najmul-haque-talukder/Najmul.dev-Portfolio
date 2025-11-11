import React from 'react'

export const Card1 = ({title, desc}) => {
  return (
    <div>
        <div className='border p-4 h-30 border-gray-400 rounded-md hover:scale-103 duration-700 '>
            <div className='text-start'>
                <p className='font-semibold text-lg'>{title}</p>
                <p className='text-sm text-gray-3200'>{desc}</p>
            </div>
        </div>
    </div>
  )
}
