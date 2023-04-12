import './App.css';
import Sidebar from "./components/sidebar"
import Review from './components/reviews';
import Ratings from './components/ratings';
import Sentiment from './components/sentiment';
import Visitors from './components/visitors';

// function App() {
//     // an array of dogs
//     const dogs = [
//       { name: "Sparky", age: 5 },
//       { name: "Spot", age: 5 },
//       { name: "Ralph", age: 5 },
//       { name: "Fido", age: 5 },
//     ]
//     // map over the dogs array and create an array of JSX for each dog
//     const dogJSX = dogs.map(dog => {
//       // we return JSX for each dog in the array which we store in the dog variable, essentially we are looping over dog of dogs
//       return (
//         <div key={dog.id}>
//           <h1>{dog.name}</h1>
//           <h2>{dog.age}</h2>
//         </div>
//       )
//     })
  
//     // the component returns JSX that uses the dogJSX array
//     return <div>{dogJSX}</div>
//   }


// export default App;
export default function App(){
  return (
    <div className='container'>
      <Sidebar className='sidebar' />
        <div className='main'>
          <Review />
          <Ratings />
          <Sentiment />
          <Visitors />
        </div>
    </div>
  )
}