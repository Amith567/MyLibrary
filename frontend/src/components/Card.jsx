import React from 'react'

const Card = ({name,department,register_no}) => {
  return (
    <>
  <div className="bg-gray-800 rounded-lg p-3 flex items-center justify-between h-20 mb-4">


    <div className="flex items-center gap-4">
      <img
        src="/profile.jpg"
        alt="student"
        className="w-14 h-14 rounded-full object-cover"/>
      <div>
        <p className="text-lg font-semibold">
          {name}
        </p>

        <p className="text-sm text-gray-400">
          Branch: {department} | Reg no: {register_no}
        </p>
      </div>

    </div>
    <div className="flex gap-2">

      <button className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 transition">
        View
      </button>

      <button className="bg-green-700 px-3 py-1 rounded hover:bg-green-600 transition">
        Edit
      </button>

      <button className="bg-red-800 px-3 py-1 rounded hover:bg-red-600 transition">
        Delete
      </button>

    </div>

  </div>


    </>
  )
}

export default Card