import React from 'react'

const HomeCard = ({item}) => {
  return (
    <div className="home-box " style={{backgroundColor:item.color}}>
        <p className='text-3xl text-white'>{item.no}</p>
        <p className='mt-3 text-gray-100'>{item.title}</p>
    </div>
  )
}

export default HomeCard