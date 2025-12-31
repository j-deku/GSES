import React, { useEffect, useState } from 'react'
import './ExploreMenu.css'
import { assets } from '../../assets/assets'

const ExploreMenu = () => {
    const [move, setMove] = useState(0)

    useEffect(()=>{
    const interval = setInterval(()=>{
        setTimeout(()=>{
            setMove(move + 1);
        }, 3000)
    }, 500)

    return () => clearInterval(interval);
    },[]);

    const moveLeft = (index) =>{
        setTimeout(()=>{
            setMove(index)
        }, 3000)
    }

  return (
    <>
    <h2>Explore Menu</h2>
    <div className='explore-menu'>
        <div className='menu-list'>
            <img src={assets.camera1} alt='camera'/>
            <p>Cameras</p>
        </div>
        
        <div className='menu-list'>
                <img src={assets.fan1} alt='camera'/>
            <p>Fans</p>
        </div>

        <div className='menu-list'>
            <img src={assets.light1} alt='camera'/>
            <p>Lights</p>

        </div>

        <div className='menu-list'>
            <img src={assets.redCable} alt='camera'/>
            <p>Red Cables</p>

        </div>

        <div className='menu-list'>
            <img src={assets.wallLight5} alt='camera'/>
            <p>Wall Lights</p>
        </div>

        <div className='menu-list'>
            <img src={assets.fan3} alt='camera'/>
            <p>Fans</p>
        </div>

        <div className='menu-list'>
            <img src={assets.light3} alt='camera'/>
            <p>Wall Lights</p>
        </div>

                <div className='menu-list'>
            <img src={assets.light2} alt='camera'/>
            <p>Wall Lights</p>
        </div>

                <div className='menu-list'>
            <img src={assets.light4} alt='camera'/>
            <p>Lights</p>
        </div>

                <div className='menu-list'>
            <img src={assets.wallLight4} alt='camera'/>
            <p>Wall Lights</p>
        </div>

                <div className='menu-list'>
            <img src={assets.light2} alt='camera'/>
            <p>Wall Lights</p>
        </div>
        <div className='arrow1' onClick={moveLeft}>{"<"}</div><div className='arrow2'>{">"}</div>
    </div><hr/>
    </>
  )
}

export default ExploreMenu
