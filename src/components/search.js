import React, { useState } from 'react';
import data from './drug1.json';
import "./search.css"

function Search() {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [selected, setSelected] = useState('');

  const [show, setShow] =  useState(false)


  function handleInputChange(event) {
    const query = event.target.value;
    setSearch(query);
    setShow(true)
    if(query.length > 0){

        const filteredData = data.fields.filter(e =>
          e.label.toLowerCase().includes(query.toLowerCase()) ||
          e.type.toLowerCase().includes(query.toLowerCase())
        );
        setResult(filteredData);
    }

  }
// console.log("Data:", data)
  function handleSelect(e) {
    setSelected(e);
    setShow(false);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleInputChange}
      />

      {result.length > 0 && search.length > 0 && show?
        <div className='menu'>
          {result.map(item => (
            <div key={item.key}>
              <p onClick={() => handleSelect(item.label)}>{item.label}</p>
              <p onClick={() => handleSelect(item.type)}>{item.type}</p>
            </div>
          ))}
        </div> : ""
      }

      <div>{selected}</div>

      
    </div>
  );
}

export default Search;