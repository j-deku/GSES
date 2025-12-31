import React, { useState } from 'react'
import './Items.css'
import { assets } from '../../assets/assets'
import { FaStar } from 'react-icons/fa'

const Items = () => {

  const [increase, setIncrease] = useState(0);

  const IncreaseItem = () =>{
    setIncrease(increase + 1);
  }

  const DecreaseItem = () =>{
    setIncrease(increase - 1);
  }

  return (
    <div className='items-container'>
            <h1>Explore our Products list</h1>
    <div className='items'>
      <p>
        Welcome to GSES, 
        We offer a wide range of high-quality products, 
        including cameras, fans, and more.</p>
      <div className='item'>
        <img src={assets.camera1} alt='item' />
        <p>Xioami Camera</p>
        <FaStar/><FaStar/><FaStar/>
                <button onClick={DecreaseItem}>-1</button>
        <button onClick={IncreaseItem}>Add to Cart <i className='count'>{increase}</i></button> 
      </div>

      <div className='item'>
        <img src={assets.camera2} alt='item' />
        <p>Xioami Camera</p>
        <FaStar/><FaStar/><FaStar/><br/>
                <button onClick={DecreaseItem}>-1</button>
        <button onClick={IncreaseItem}>Add to Cart <i className='count'>{increase}</i></button> 
      </div>

      <div className='item'>
        <img src={assets.fan1} alt='item' />
        <p>Xioami Camera</p>
        <FaStar/><FaStar/><FaStar/>
                <button onClick={DecreaseItem}>-1</button>
        <button onClick={IncreaseItem}>Add to Cart <i className='count'>{increase}</i></button> 
      </div>

      <div className='item'>
        <img src={assets.fan2} alt='item' />
        <p>Xioami Camera</p>
        <FaStar/><FaStar/><FaStar/>
                <>{increase}</>
                <button onClick={DecreaseItem}>-1</button>
        <button onClick={IncreaseItem}>Add to Cart <i className='count'>{increase}</i></button> 
      </div>

      <div className='item'>
        <img src={assets.fan3} alt='item' />
        <p>Xioami Camera</p>
        <FaStar/><FaStar/><FaStar/>
                <button onClick={DecreaseItem}>-1</button>
        <button onClick={IncreaseItem}>Add to Cart <i className='count'>{increase}</i></button> 
      </div>

      <div className='item'>
        <img src={assets.fan4} alt='item' />
        <p>Xioami Camera</p>
        <FaStar/><FaStar/><FaStar/>
                <button onClick={DecreaseItem}>-1</button>
        <button onClick={IncreaseItem}>Add to Cart <i className='count'>{increase}</i></button> 
      </div>
    </div>
    </div>
  )
}

export default Items
