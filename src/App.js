import './App.css';
import Sidebar from "./components/sidebar"
import Review from './components/reviews';
import Ratings from './components/ratings';
import Sentiment from './components/sentiment';
import Visitors from './components/visitors';

export default function App(){
  return (
    <div className='container'>
      <Sidebar />
          <Review />
          <Ratings />
          <Sentiment />
          <Visitors />
    </div>
  )
}