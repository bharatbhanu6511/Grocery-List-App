import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoping list')) || []);
  // the '||' is called short circuit operator, even if you dont habe this [] after || the app would still run fine but only because when we remove all the items from list the shoping list in local storage sets to [] and this can happen only if there was already a shoping list in local storage, if the app was being run for the very first time there would be no shoping list in local storage and the console would return an error saying that null cannot be filtered 
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

  // console.log('before use effect')
  // runs every time you type in box

  // useEffect(()=>{
  //   console.log('render');
  // })
  // logs 'render' to console every time page renders or when every time you type a new character in the 'add item' input box

  useEffect(() => {
    localStorage.setItem('shoping list', JSON.stringify(items))
    // console.log('updating items state');
    // runs asynchronously after 'after use effect' and only when items changes
  }, [items])
  // logs 'render' to the console only at the time of loading page, it does not logs everytime you type a new character in the 'add item' input box, the use effect looks in [] everytime since it is a dependency, if contents inside [] don't change it does not logs, it will log only when contents inside [] change

  // console.log('after use effect')
  // runs every time you type in box

  const setAndSaveItems = (newItems) => {
    setItems(newItems)
    
  }
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setAndSaveItems(listItems)
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title="Grocery Store" />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Content
        items={
          items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))
          // returns error that null cannot be filtered when [] is not there after || in useState()
        }
        setItems={setItems} handleCheck={handleCheck} handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
