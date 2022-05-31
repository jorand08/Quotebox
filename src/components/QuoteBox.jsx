import React, { useState } from 'react'
import Phrase from './Phrase'
import users from '../json/users.json'


const QuoteBox = ({randomIndex, color, setColor, arrayColors}) => {
    
    const [text, setText] = useState(randomIndex(users))

    console.log(text)
      
    
    return (
    <div style={{color:color}} className='quote-box'>
        <i className='bx bxs-quote-alt-left' ></i>
        <Phrase text={text}/>
        <div className='box-btn'>
            <i 
            className='bx bx-chevrons-right'
            onClick={()=>{
                setColor(randomIndex(arrayColors))
                setText(randomIndex(users))
            }
        }
            >   
            </i>
        </div>
    </div>
  )
}

export default QuoteBox
