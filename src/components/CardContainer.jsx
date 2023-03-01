import React from 'react'
import UserCard from './UserCard'
import "../App.css"


function CardContainer() {
    let userList=[
        {
            UserName:"Praveen",
            UserId:2222
        },
        {
            UserName:"Athira" ,
            UserId:7777
        },
        {
            UserName:"Nandu",
            UserId:1212
        },
        {
            UserName:"Abhijith",
            UserId:1313
        },
        {
            UserName:"Akash",
            UserId:1414
        },
        {
            UserName:"Jishnu",
            UserId:1515
        },
        {
            UserName:"Aswin",
            UserId:1616 
        }
    ]

  return (

    <div className='cardcontainer'>
       {
        userList.map((user)=>{
            return <UserCard  users = {user}/>
        })
       }
    
    </div>
  )
}

export default CardContainer