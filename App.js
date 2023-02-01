import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [item, setItem] = useState("");
  const [fitem, fsetItem] = useState([]);

  //for input change at target element
  const set = (e) => {
    setItem(e.target.value);
  }


  //adding new item
  const add = () => {
    fsetItem((prev) => {
      return [...prev, item];
    });
    setItem("");
  }

  //deleting item
  const del = (id) => {
    fsetItem((prev) => {
      //items other than matching id are returned(displayed)
      return prev.filter((ele, index) => {
        return index !== id;
      });
    })
  }

  return (
    <div className='main-div'>
      <div className='center'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <input onChange={set} type='text' value={item} placeholder='Add item' />
        <button className='btn' onClick={add}>+</button>
        <ol>
          {
            fitem.map((cur, i) => {
              return <Todo cur={cur}
                key={i} id={i}
                onSelect={del}
              />
            })

          }
        </ol>
      </div>
    </div>
  );
}

export default App;
