import React from 'react'
import "./Footer.css"
function Footer() {
  return (
      <div className='Footer'>
          <h3>Product sell</h3>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th></th>
            <th>Stock</th>
            <th>Price</th>
            <th>Total Sales</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThbK_Q5qalPk1lsfMIi-gSy2Vml_9l9ZpMPg&usqp=CAU"/></td>
            <td >Abstract 3D</td>
            <td>32 in stocks</td>
            <td>$ 45.99</td>
            <td>20</td>
          </tr>
          <tr>
          <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzydGqLWsjjX4nkt1DgjiwaPGoUZh_uQfIA&usqp=CAU"/></td>
            <td> Sarphens Illustartion</td>
            <td>32 in stocks</td>
            <td>$ 45.99</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default Footer
