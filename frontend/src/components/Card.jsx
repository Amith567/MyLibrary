import React from 'react'

const Card = ({name,department,register_no}) => {
  return (
    <>
      <div className="bg-gray-800 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">

        <div className="flex items-center gap-4">
          <img
            src="/profile.jpg"
            alt="student"
            className="w-14 h-14 rounded-full object-cover"
          />

          <div>
            <p className="text-lg font-semibold text-white">
              {name}
            </p>

            <p className="text-sm text-gray-300">
              Branch: 
              <span className="text-blue-400"> {department}</span>
              {" | "}
              Reg no:
              <span className="text-blue-400"> {register_no}</span>
            </p>
          </div>
        </div>

        <div className="flex gap-2 w-full sm:w-auto justify-end">
          <button className="btn">
            View
          </button>

          <button className="btn bg-green-600 hover:bg-green-500">
            Edit
          </button>

          <button className="btn bg-red-600 hover:bg-red-500">
            Delete
          </button>
        </div>

      </div>
    </>
  )
}

export default Card