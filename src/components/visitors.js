import {useState, useEffect} from "react";

export default function Visitors(){
   // initiate counter at 0
   const [counter, setCounter] = useState(0)
   useEffect(() => {
     const savedCounter = localStorage.getItem('siteCounter');
     if (savedCounter) {
      setCounter(parseInt(savedCounter));
     }else{
      setCounter(1);
     }
   }, counter);

    const countVisitors = () => {
     setCounter(counter + 1);
     localStorage.setItem('siteCounter', counter);
      
  };


  return (
      <div className="visitors">
          <h1>Website Visitors</h1>
          <p>Number of visitors: {counter}</p>
          <button onClick={countVisitors}>Click twice</button>
      </div>
    )


  }