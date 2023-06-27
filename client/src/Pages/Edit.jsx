import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import { host } from '../utils'
import { useNavigate, useParams } from 'react-router-dom'

function Edit() {
  const {id} = useParams()
  const nav = useNavigate()

  const [item, setitem] = useState({
      name:"",
      price:"",
      quantity:""
  })

  const fetchItem = async()=>{
    const res = await fetch(`${host}edit/${id}`,{
      method: "GET",
    })
    const response = await res.json()
    setitem(response)
  }

  useEffect(()=>{
    fetchItem()
  },[])

  const formHandler = async(e)=>{
    e.preventDefault();
    const res = await fetch(`${host}edit/${id}`,{
        method:"PATCH",
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
    <Form formHandler={formHandler} item={item} setitem={setitem} buttomLebel={"Edit"}/>
    </div>
  )
}

export default Edit