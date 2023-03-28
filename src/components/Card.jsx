import React from 'react'

const Card = () => {
  return (

  <div id='center'>

    <div id='left'>
    <div className='big-card'>
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" />
      <p>Description</p>
      <p>Title</p>
    </div>
    </div>
    


  <div id='right'>

    <div className='small-card'>
      <h2>Mens</h2>
      <p>358 items</p>
    <img src="/my-app/src/styles/img/category-2.jpg.webp" alt="" />
      <a href="">Shop now!</a>
    </div>
    <div className='small-card'>smallCard</div>
    <div className='small-card'>smallCard</div>
    <div className='small-card'>smallCard</div>
  </div>

</div>
    
  );
};

export default Card;