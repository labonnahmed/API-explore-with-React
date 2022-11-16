import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <DataLoad></DataLoad>
    </div>
  );
}

function DataLoad(){
  const [ users, setUsers]= useState([])
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => setUsers(data))
  },[])

  const myStyle= {
    boxShadow:'5px 5px 10px grey',
    width:'240px',
    display:'inline-block',
    textAlign:'center',
    margin:'15px'

  }
  return (
   <div>
    <h2 style={{textAlign:"center"}}>Like your favorite person</h2>
    <div>
    { users.map ( user => 
      <div style={myStyle}>
        <div>
          <h3>{user.name}</h3>
          <p>Address: {user.address.city} <br />
          Phone: {user.phone}</p>
          <Person></Person>
        </div>
      </div>
    )}
    </div>
   </div>
  )
}

function Person(){
  const [ count, setCount ]= useState(0);
  const handleClick= () => setCount (count + 1);

  const btnStyle={
    border:'none',
    
  }

  return (
    <div style={{display:"flex" }}>
      <button onClick={handleClick} style={btnStyle}> ❤️ </button>
      <h4>{count}</h4>
    </div>
  )
}

export default App;
