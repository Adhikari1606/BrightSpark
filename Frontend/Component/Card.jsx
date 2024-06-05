import React from 'react';
export default function Card({image,title,description})
{
    return (
        <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105">
          <img src={image} alt={title} className="w-24 h-24 rounded-full mx-auto" />
          <h3 className="mt-4 text-xl font-semibold text-center">{title}</h3>
          <p className="mt-2 text-gray-600 text-center">{description}</p>
        </div>
      </div>
    )
}