import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function UseFetch() {
  const [data,setData] = useState([]);
  async function getData(){
    try{
      const serverData=await fetch("http://localhost:4005/datawrite")
      if(!serverData.ok){
        throw new Error("Failed to fetch data");
      }
      const jsondata=await serverData.json();
      console.log("Received data:", jsondata);
      setData(jsondata);
    }catch(error){
      console.error("Error fetching data:", error);
      alert("Error fetching data from server");
    }
  }
  function cartItem(ele){

  }

  return (
    <>
      <h2>Fetching data from Node Server</h2>
      {
        data && data.map((ele) => (
          <div key={ele.id} style={{border:"2px solid pink",margin:"10px"}}>
            <h3>{ele.id}:{ele.title}</h3>
            <h3>{ele.description}</h3>
            <h2>{ele.price}</h2>
            <h2>{ele.rating}</h2>
            <button onClick={()=>cartItem(ele)}>Add to Cart</button>
          </div>
        ))
      }
      <button onClick={getData}>Fetch Data</button>
    </>
  )
}

export default UseFetch
