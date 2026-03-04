import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="title">
        <h2>BlooFi</h2>
        <div className="subtitle">
            Your Favorite Online Blouse Shop
        </div>
            <div className="search">
              <input type="text" placeholder="Search for items..." />
              <button>Search</button>
      </div>
        </div>
    </div>
  )
}

export default Sidebar
