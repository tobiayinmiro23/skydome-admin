import React from 'react'
import './NewLaptopProduct.css'
const UpdateGeneralProduct = () => {
  return (
    <div className='NewProduct'>
        <div className="inputContainer">
            <form action="">
                <input required type="text" placeholder='Product name' />
                <input required type="text" placeholder='Product price' />
                <input required type="text" placeholder='Product id' />
                <input required type="text" placeholder='Product image url' />
                <textarea required placeholder='product preview'></textarea>
                <div className="btnContainer"><button>Update</button></div>
            </form>
        </div>

    </div>


  )
}

export default UpdateGeneralProduct