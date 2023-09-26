import { useState } from "react"

export default function Form({onAddForm}) {
    const [description,setDescription]=useState("")
    const [quantity,setQuantity]=useState(1)
   
  
    const handleSubmit=(e)=>{
      e.preventDefault()
     if(!description ||description===" ") return
      const newForm={description,quantity,id:Date.now(),packed:false}
      onAddForm(newForm)
      setDescription("")
      setQuantity(1)
    }
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>
        <select
         value={quantity} 
         onChange={(e)=>setQuantity(e.target.value)}>
          {Array.from({length:20},(_,i)=>i+1)
          .map((num)=><option value={num} key={num}>{num}</option>)}
          
        </select>
        <input type="text" 
        name="" 
        placeholder="Items" 
        value={description}
        onChange={(e)=>setDescription(e.target.value)}  />
        <button>Add</button>
      </form>
    );
  }