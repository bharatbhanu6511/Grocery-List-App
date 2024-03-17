import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef=useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit} >
        <label htmlFor="addItem">Add item</label>      
        <input type="text" autoFocus ref={inputRef} id='addItem' placeholder='Add item' required value={newItem} onChange={(e)=>setNewItem(e.target.value)} />
        <button onClick={()=>inputRef.current.focus()} type="submit" aria-label='add item' ><FaPlus/></button>
    </form>
  )
}

export default AddItem
