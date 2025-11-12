import React from 'react'

export const Card1 = ({ title, desc, id }) => {
  return (
    <div key={id} className="w-full">
      <div className="
        border p-4 border-gray-400 rounded-md 
        hover:scale-105 duration-500 
        h-auto sm:h-32 
        w-full sm:w-auto
      ">
        <div className="text-start space-y-1">
          <p className="font-semibold text-lg">{title}</p>
          <p className="text-sm text-gray-400 leading-5">
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}
