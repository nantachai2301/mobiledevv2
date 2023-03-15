import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Featured from '../components/Featured'
import FeaturedProperties from '../components/FeaturedProperties'
import PropertyList from '../components/PropertyList'
import MailList from '../components/MailList'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
            <Navbar/>
            <Header/>
            <div className='homeContainer'>
              <Featured/>
              <h1 className='homeTitle'>Browse by property type</h1>
              <PropertyList/>
              <h1 className='homeTitle'>Home guests love</h1>
              <FeaturedProperties/>
              <MailList/>
              <Footer/>
            </div>
    </div>
  )
}

export default Home