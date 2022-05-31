import React from 'react'

const Phrase = ({text}) => {
  return (
    <div className='phrase'>

        <p>{text.quote} </p>
        <p><i><b>{text.author}</b></i></p>
    </div>
  )
}

export default Phrase