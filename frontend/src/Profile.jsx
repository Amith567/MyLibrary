import React from 'react'

const Profile = () => {
  return (
    <div>{localStorage.getItem("username")}</div>
  )
}

export default Profile