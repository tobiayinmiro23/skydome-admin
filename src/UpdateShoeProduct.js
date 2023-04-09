import React from 'react'
import './NewLaptopProduct.css'
const UpdateShoeProduct = () => {
  return (
    <div className='NewProduct'>
        <div className="inputContainer">
          <form action="">
            <input type="text" placeholder='Product name' />
            <input type="text" placeholder='Product price' />
            <input type="text" placeholder='Product id' />
            <input type="text" placeholder='Product image url' />
            <input type="number"  placeholder='Quantity' />
            <input type="number"  placeholder='Size' />
            <textarea placeholder='product preview'></textarea>
            <div className="btnContainer"><button>Update</button></div>
          </form>
        </div>

    </div>


  )
}

export default UpdateShoeProduct