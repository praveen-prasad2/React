import React from 'react'

function UserCard(props) {
  return (
    <div className='wrapper'>
        <p>UserName:{props.users.UserName}</p>
        <p>UserId:{props.users.UserId}</p>
        <button className='viewuser'>View User</button>
    </div>
  )
}

export default UserCard