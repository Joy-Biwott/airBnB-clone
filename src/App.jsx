import './App.css'
import Intro from './components/Intro';
import NavBar from './components/Navbar';
import Card from './components/Card';
import Data from "./data.js"

function App() {
  const cardData=Data.map((data)=>
    <Card 
      key={data.id}
      data={data}
    />)
  return (
    <>
     <NavBar />
     <Intro />
     <section className='cards-list'>
       {cardData}
     </section>
    </>
  )
}

export default App
