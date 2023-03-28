import React from 'react'


function Dynamiccard(props) {
  return (
    <div id='dynamic'>


    <div className='dynamic-card'>
    <img src={props.img} alt="product" />
        <p>{props.title}</p>
        <p>{props.description}</p>
        <span>{props.price}</span>
        <span>$</span>
      
    </div>


    </div>
  )
}

export default Dynamiccard