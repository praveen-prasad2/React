import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function EffectComponent() {
  const[task,settask]=useState({})
async  function callApi(){
  let response=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
  settask(response.data)
 console.log(task)
}
  useEffect(()=>{callApi()},[]) 
  
  return (
    <>
    <h1>{task.title}</h1>
    <p>{task.userId}</p>

   <Link to ="/signup"><button >Signup</button></Link>
   <Link to ="/login"><button >Login</button></Link>
   <Link to ="/counter"><button >Counter</button></Link>
   <Link to ="/parent"><button >Parent</button></Link>
    </>
  )
}

export default EffectComponent