import React from 'react'
import"./Cards.css";
function Cards() {
  return (
       <div className='cards'>
      <div class='card1'><div class="rounded1"><img src="https://cdn-icons-png.flaticon.com/128/2150/2150150.png" class="rounded-card1"/></div><div class="card1_content">
        <h5>Earning</h5> <h2>$198k</h2>
        <h5 className='increase1'>↑ 35.6 % this month</h5>
        </div></div>
      <div class='card1'><div class="rounded2"><img src="https://cdn-icons-png.flaticon.com/128/2965/2965335.png" class="rounded-card1"/></div><div class="card1_content">
      <h5>Orders</h5> <h2>$2.4k</h2>
        <h5 className='increase2'>↑ 3 % this month</h5></div></div>   
      <div class='card1'><div class="rounded3"><img src="https://cdn-icons-png.flaticon.com/128/10196/10196781.png" class="rounded-card1"/></div><div class="card1_content">
      <h5>Balance</h5> <h2>$2.4k</h2>
        <h5 className='increase3'>↓ 2 % this month</h5></div></div>
      <div class='card1'><div class="rounded4"><img src="https://cdn-icons-png.flaticon.com/128/9321/9321075.png" class="rounded-card1"/></div><div class="card1_content">
      <h5>Total Sales</h5> <h2>$18k</h2>
        <h5 className='increase4'>↓ 3.6 % this month</h5></div></div>

    </div>
  )
}

export default Cards
