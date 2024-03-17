import React from 'react'
import { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import ItemList from './ItemList'

const Content = ({items,setItems, handleCheck, handleDelete}) => {
  
  

  return (
    <main id='main-content'>
      {items.length ? (
        <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />        
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty</p>
      )}
    </main>
  )
}

export default Content
