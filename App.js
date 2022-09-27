
import './App.css';

import { useState } from 'react'

function App() {

  const [txt, settxt] = useState('')
  const [list, setlist] = useState([])
  const [edititem, setedititem] = useState(true)
  const [Newitem, setNewitem] = useState('')
 

  function add() {
    if (!txt) {

    }
    else if (txt && !edititem) {
      setlist(list.map((elem) => {
        if (elem.Token === Newitem) {
          return { ...elem, Name: txt }
        }
        return elem;
      }))
      setedititem(true)
      settxt('')
      setNewitem(null)

    }
    else {
      // list.push(txt)
      const Items = { Token: new Date().getTime().toString(), Name: txt }
      setlist([...list, Items]);
      settxt('')
    }
  }

  function deleteitem(id) {
    alert(" Are you Sure to Delete Item")
    const updateitem = list.filter((e) => {

      return id !== e.Token;

    })
    setlist(updateitem)
  }


  function DeleteAll() {
    alert(" Are you Sure to Delete All Items")
    setlist([]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <input onChange={(e) => {
          settxt(e.target.value)
        }} />
        
        {
          edititem ? <button onClick={() => add()}> Add item</button> : <button onClick={() => add()}> Update item</button>
        }
        
              <button className='btn-danger' onClick={() => DeleteAll()}>Delete All Item </button>
    
              </div>
    
    

        <ul>{list.map((Inputvalue) => {
             return<li key={Inputvalue.Token} >{Inputvalue.Name}
          <div>
            <button className='btn-danger' onClick={() => deleteitem(Inputvalue.Token)}>Delete Item</button>
            </div>
          </li>
          
        })}
        </ul>

      </header>
    </div>
  );
}

export default App;