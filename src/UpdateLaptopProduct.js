import React from 'react'
import './NewLaptopProduct.css'
const UpdateLaptopProduct = () => {
  fetch('http://localhost:3000/product',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            // id:id
        })
    }).then(res=>res.json())
    .then(productInfo=>{
        // handleloader(imageReady)
    }).catch(err=>console.log('an error occured'))
    
    
  return (
    <div className='NewProduct'>
        <div className="inputContainer">
            <form action="">
                <input type="text" required placeholder='Product name' />
                <input type="text" required placeholder='Product price' />
                <input type="text" required placeholder='Product id' />
                <input type="text" required placeholder='Product image url' />
                <input type="text" required placeholder='Product image url' />
                <input type="text" required placeholder='Core type' />
                <input type="text" required placeholder='Core name' />
                <input type="text" required placeholder='Brand' />
                <input type="text" required placeholder='Battery Information' />
                <input type="text" required placeholder='Ram' />
                <input type="text" required placeholder='Rom' />
                <input type="text" required placeholder='Operating System' />
                <input type="text" required placeholder='Color' />
                <input type="text" required placeholder='Touch screen' />
                <input type="text" required placeholder='Weight' />
                <input type="text" required placeholder='Screen inch' />
                <input type="text" required placeholder='Gaming graphics' />
                <input type="number"  required placeholder='Quantity' />
                <textarea required placeholder='product preview'></textarea>
                <div className="btnContainer"><button>Update</button></div>
            </form>
        </div>

    </div>


  )
}

export default UpdateLaptopProduct