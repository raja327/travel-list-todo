import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import ParkingList from "./ParkingList";
import  Stats  from "./Stats";

export default function App() {
  const [items,setItems]=useState([])
  const handleAddItems=(item)=>{
    setItems((items)=>[...items,item])
  }
  const handleDeleteItem=(id)=>{
    setItems((items)=>items.filter(item=>item.id!==id))
  }
  const handleToggleItem=(id)=>{
    setItems(items=>items.map(item=>item.id===id ? {...item,packed:!item.packed}:item))
  }
  const handleClearList=()=>{
   if(items.length===0) {
    window.alert('already clear ')
   }else{
    const confirmed=window.confirm('are you sure want to clear?')
    if(confirmed){setItems([])}
   }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddForm={handleAddItems}/>
      <ParkingList items={items} onDeleteForm={handleDeleteItem} onCheckedItem={handleToggleItem} onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
}





