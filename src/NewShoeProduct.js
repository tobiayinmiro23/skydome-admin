import React,{useState} from 'react'
import './NewLaptopProduct.css'
const NewShoeProduct = () => {
  const [no, setno] = useState('')
  const [id, setid] = useState('')
  const [productname, setproductname] = useState('')
  const [productprice, setproductprice] = useState('')
  const [productinfo, setproductinfo] = useState('')
  const [productimage1, setproductimage1] = useState('')
  const [shoesize, setshoesize] = useState('')

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
            <div className="btnContainer"><button>Create</button></div>
          </form>
        </div>

    </div>


  )
}

export default NewShoeProduct