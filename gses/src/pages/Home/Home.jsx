import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Items from '../../components/Items/Items'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <ExploreMenu/>
      <Items/>
      <Footer/>
    </div>
  )
}

export default Home
