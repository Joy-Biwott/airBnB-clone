import './App.css'
import Intro from './components/Intro';
import NavBar from './components/Navbar';
import Card from './components/Card';
import Data from "./data.js"

function App() {
  const cardData=Data.map((data)=>
    <Card 
      key={data.id}
      title={data.title}
      description={data.description}
      price={data.price}
      coverImg={data.coverImg}
      rating={data.stats.rating}
      reviewCount={data.stats.reviewCount}
      location={data.location}
      openSpots={data.openSpots}
    />)
  return (
    <>
     <NavBar />
     <Intro />
     {cardData}
    </>
  )
}

export default App
