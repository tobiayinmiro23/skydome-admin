import React from 'react'
import './NewLaptopProduct.css'
const UpdatePhoneProduct = () => {
  return (
    <div className='NewProduct'>
        <div className="inputContainer">
            <form action="">
              <input type="text" required placeholder='Product name' />
              <input type="text" required placeholder='Product price' />
              <input type="text" required placeholder='Product id' />
              <input type="text" required placeholder='Product image url' />
              <input type="text" required placeholder='Product image url' />
              <input type="text" required placeholder='network' />
              <input type="text" required placeholder='Battery Information' />
              <input type="text" required placeholder='Ram' />
              <input type="text" required placeholder='Rom' />
              <input type="text" required placeholder='Version' />
              <input type="text" required placeholder='Color' />
              <input type="text" required placeholder='Front camera' />
              <input type="text" required placeholder='Rear camera' />
              <input type="text" required placeholder='Screen inch' />
              <input type="number"  required placeholder='Quantity' />
              <textarea required placeholder='product preview'></textarea>
              <div className="btnContainer"><button>Update</button></div>
            </form>
        </div>

    </div>


  )
}

export default UpdatePhoneProduct