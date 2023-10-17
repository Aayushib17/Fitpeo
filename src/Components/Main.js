import React from 'react'
import'./Main.css';
import Bargraph from './Bargraph';
import Footer from './Footer';
import Cards from './Cards';
import Piechart from './Piechart'
function Main() {
  return (
    <div className='main'>
      <h2 className='heading'>Hello!</h2>
     <Cards/>
    <div className='mid'>
    <div className='Overview'>
      <h2>Overview</h2>
      <h4>Monthly Earning</h4>
    <Bargraph/>
    </div>
    <div className='Customers'>
      <h2>Customers </h2>
      <h4>Customers that buy product</h4>
      <Piechart/>

    </div>
    </div>
    <Footer />
    </div>
  )
}

export default Main;

