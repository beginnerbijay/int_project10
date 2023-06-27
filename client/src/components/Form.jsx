import React from 'react'

function Form({formHandler, item, setitem, buttomLebel}) {
  
const handler =(e)=>{
  const {name,value} = e.target;
  setitem({...item,[name]:value})
}
   
  return (
    <form onSubmit={formHandler} className='mx-auto form mt-5'>
  <div className="mb-3">
    <label htmlFor="exampleInputItem1" className="form-label">Item Name</label>
    <input type="text" className="form-control" id="exampleInputItem1" name='name' value={item.name} onChange={handler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPrice1" className="form-label">Price</label>
    <input type="number" className="form-control" id="exampleInputPrice1" name='price' value={item.price} onChange={handler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputQuantity1" className="form-label">Quantity</label>
    <input type="number" className="form-control" id="exampleInputQuantity1" name='quantity' value={item.quantity} onChange={handler}/>
  </div>
  <button className="btn btn-primary">{buttomLebel}</button>
</form>
  )
}

export default Form