import React from 'react'

const TransactionCard = () => {

  const transaction = {
    transactionId: "TRX10234",
    studentId: "STU5678",
    bookId: "BK2301",
    submissionDate: "25 May 2026",
    status: "Active"
  }

  return (
    <div className="bg-gray-800 shadow-lg rounded-xl p-5 border w-full">

      <div className='flex justify-between items-center flex-wrap gap-2'>
        <h2 className="text-xl font-bold text-gray-100 break-all">
          {transaction.transactionId}
        </h2>

        <span
          className={`px-3 py-1 rounded-lg text-sm font-semibold
          ${
            transaction.status === "Active"
              ? "bg-green-700 text-white"
              : "bg-red-700 text-white"
          }`}
        >
          {transaction.status}
        </span>
      </div>

      <div className="mt-4 space-y-3 text-gray-200">

        <p>
          <span className="font-semibold">
            Student ID:
          </span>{" "}
          {transaction.studentId}
        </p>

        <p>
          <span className="font-semibold">
            Book ID:
          </span>{" "}
          {transaction.bookId}
        </p>

        <p>
          <span className="font-semibold">
            Submission Date:
          </span>{" "}
          {transaction.submissionDate}
        </p>

      </div>

    </div>
  )
}

export default TransactionCard