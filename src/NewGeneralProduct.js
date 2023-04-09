import React,{useState} from 'react'
import './NewLaptopProduct.css'
const NewGeneralProduct = () => {
  const [id, setid] = useState('')
  const [productname, setproductname] = useState('')
  const [productprice, setproductprice] = useState('')
  const [productinfo, setproductinfo] = useState('')
  const [productimage1, setproductimage1] = useState('')
  return (
    <div className='NewProduct'>
        <div className="inputContainer">
            <form action="">
                <input required type="text" placeholder='Product name' />
                <input required type="text" placeholder='Product price' />
                <input required type="text" placeholder='Product id' />
                <input required type="text" placeholder='Product image url' />
                <textarea required placeholder='product preview'></textarea>
                <div className="btnContainer"><button>Create</button></div>
            </form>
        </div>

    </div>


  )
}

export default NewGeneralProduct