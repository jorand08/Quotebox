import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'

function App() {
  const randomIndex = array => { 
    const randomPosition = Math.floor(array.length*Math.random())
    const randomElement = array[randomPosition]
    return randomElement
}

const arrayColors = ['#ff6961', '#77dd77', '#595959', '#84b6f4', '#fdcae1','00dbff']

const [color, setColor] = useState(randomIndex(arrayColors))
  return (
  
    <div style={{backgroundColor:color}} className="App">
   <QuoteBox 
    color={color} 
    randomIndex={randomIndex}
    setColor={setColor}
    arrayColors={arrayColors}
   />


    </div>
  )
}

export default App
