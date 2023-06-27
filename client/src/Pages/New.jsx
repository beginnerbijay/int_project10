import React, { useState } from 'react'
import Form from '../components/Form'
import { host } from '../utils';
import { useNavigate } from 'react-router-dom';

function New() {
  const nav = useNavigate()
  const [item, setitem] = useState({
      name:"",
      price:"",
      quantity:""
  })

  const formHandler = async(e)=>{
    e.preventDefault();
    const res = await fetch(`${host}new`,{
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    })
    if(res.status===500){
        alert("server error")
    }else if(res.status===400){
        alert("Something went wrong")
    }else if(res.status===200){
        nav("/")
    }
}

  return (
    <div className='container'>
    <Form formHandler={formHandler} item={item} setitem={setitem} buttomLebel={"Submit"}/>
    </div>
  )
}

export default New