import React, { useState } from 'react'
import {LaptopProductDb} from './LaptopProductDb'
import './AllProducts.css'

function LaptopProduct() {
  const [search,setsearch]=useState('')
    const result=LaptopProductDb.filter(item=>{
      return  item.productname.toLowerCase().includes(search.toLowerCase())
    })
    
  return (
    <div>
        {/* <Navigation/> */}
         {/* search bar */}
         <div className="search-container">
          <div className="select">
            <select name="" id="">
              <option value="">Name</option>
              <option value="">Id</option>
            </select>
          </div>
          <input className="search" onChange={(e)=>setsearch(e.target.value)} value={search} type="search" />
          <button className="searchbtn" >search</button>
        </div>
        <hr />
        <div className="product">
        {
            result.map(item=>{
                return <div key={item.id} className="card c1">
                        <div className="card-img-container">
                            <img src={item.productimage1} alt="" />
                        </div>
                        <div  className="card-info">
                            <div className="productName">
                                <h3>{item.productname}</h3>
                            </div>
                                <div className="productPrice">
                                <p>&#8358;</p>
                                <p className="Price">{item.productprice}</p>
                                </div>
                            <div className="productId">
                                <p>{item.id}</p>
                                <div className="delete"><img src="/skydome images/delete.png" alt="" /></div>
                            </div>
                        </div>
                    </div>
            })
        }
        </div>
    </div>
  )
}

export default LaptopProduct