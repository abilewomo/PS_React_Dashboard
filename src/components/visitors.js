import {useState, useEffect} from "react";

export default function Visitors(){
   // initiate counter at 0
   const [counter, setCounter] = useState(0)
   useEffect(() => {
     const savedCounter = localStorage.getItem('siteCounter'); //get the stored value of counter
     if (savedCounter) {
    setCounter(parseInt(savedCounter));
     }else{
      setCounter(1);
     }
   }, []);

    const countVisitors = () => {
     setCounter(counter + 1);
     localStorage.setItem('siteCounter', counter);//save counter value to browser cache
  };

  

  return (
      <div className="visitors">
          <h1>Website Visitors</h1>
          <p>Number of visitors: {counter}</p>
          <button onClick={countVisitors}>Click twice to save your visit</button>
      </div>
    )


  }