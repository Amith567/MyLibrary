import React from 'react'

const Card = () => {
  return (
    <>
  <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between h-20 mb-4">


    <div className="flex items-center gap-4">
      <img
        src="https://i.pravatar.cc/100"
        alt="student"
        className="w-14 h-14 rounded-full object-cover"/>
      <div>
        <p className="text-lg font-semibold">
          Amith P
        </p>

        <p className="text-sm text-gray-400">
          LIB2026001
        </p>
      </div>

    </div>
    <div className="flex gap-2">

      <button className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition">
        View
      </button>

      <button className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600 transition">
        Edit
      </button>

      <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition">
        Delete
      </button>

    </div>

  </div>


    </>
  )
}

export default Card