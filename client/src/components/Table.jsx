import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {host} from '../utils'

function Table() {
    const [data, setdata] = useState([])

    const fetchdata = async()=>{
        let res = await fetch(`${host}`,{
            method: "GET",
        })
        let response = await res.json()
        if(res.status===200){
            setdata(response)
        }else if(res.status===500){
            alert("server error")
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const deleteItem = async(e)=>{
      let res = await fetch(`${host}delete/${e}`,{
        method: "DELETE",
    })
    if(res.status===200){
      fetchdata()
    }else if(res.status===500){
        alert("server error")
    }
    }
    
  return (
    <table className="table table-striped mt-5 mx-auto align-middle">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Item</th>
      <th scope="col">Price (₹)</th>
      <th scope="col">Quanity (kg)</th>
      <th scope="col" className='text-center'>Action</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((val,ind)=>{
        return (
    <tr key={ind}>
      <th scope="row">{ind+1}</th>
      <td>{val.name}</td>
      <td>{val.price}</td>
      <td>{val.quantity}</td>
      <td className='text-center d-flex'>
        <Link to={`/edit/${val._id}`}><button type="button" className="btn btn-warning">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z"/><path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"/></g></svg>
        </button></Link>
      <button type="button" className="btn btn-danger ms-2" onClick={()=>deleteItem(val._id)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="white" d="M8.108 3a3 3 0 0 0-2.544 1.41l-4.08 6.53a2 2 0 0 0 0 2.12l4.08 6.53A3 3 0 0 0 8.108 21H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H8.108Zm8.427 12.536a1 1 0 0 1-1.414 0L13 13.414l-2.121 2.122a1 1 0 1 1-1.415-1.415L11.586 12L9.464 9.879a1 1 0 0 1 1.415-1.415L13 10.586l2.121-2.122a1 1 0 1 1 1.414 1.415L14.415 12l2.12 2.121a1 1 0 0 1 0 1.415Z"/></g></svg>
      </button>
      </td>
    </tr>
        )
    })}
  </tbody>
</table>
  )
}

export default Table