import React from 'react'

const HomeListCardItems = ({data}) => {
    return (
        <div className='flex justify-between p-2'>
            <div className=''>
                <p className='text-lg font-semibold capitalize'>{data.title}</p>
                <p className='font-light capitalize'>{data.name}</p>
            </div>
            <div className='mt-6 font-light'>
                {data.date}
            </div>
        </div>
    )
}

const HomeListCard = ({ heading,HomeListCardItemsData }) => {
    return (
        <div className='w-100 rounded-md border border-gray-300 inset-shadow-sm p-6'>
            <p className='text-xl font-bold text-gray-500 pb-2'>{heading}</p>
            {
            HomeListCardItemsData.map((data) => (
                <HomeListCardItems key={data.id} data={data} />
            ))
            }
            <div className='flex justify-end'>
                <p className='text-blue-500 font-bold cursor-pointer hover:underline hover:underline-blue-500'>View all</p>
            </div>
        </div>
    )
}

export default HomeListCard