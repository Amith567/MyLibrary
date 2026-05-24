import React from 'react'

const BookCard = ({ name, author, volume ,quantity}) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-xl p-5 border w-80">
      
      <h2 className="text-xl font-bold text-gray-100">
        {name}
      </h2>

      <div className="mt-3 space-y-2 text-gray-200">
        <p>
          <span className="font-semibold">Author:</span> {author}
        </p>

        <p>
          <span className="font-semibold">Volume:</span> {volume}
        </p>

        <p>
          <span className="font-semibold">Quantity:</span>{quantity}
        </p>
      </div>

      <div className="flex justify-between mt-5">
        <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          View
        </button>

        <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Edit
        </button>

        <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>

    </div>
  )
}

export default BookCard