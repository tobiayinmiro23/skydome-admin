import React,{useState} from 'react'
import './NewLaptopProduct.css'
const NewPhoneProduct = () => {
  const [no, setno] = useState('')
  const [id, setid] = useState('')
  const [productname, setproductname] = useState('')
  const [productprice, setproductprice] = useState('')
  const [productinfo, setproductinfo] = useState('')
  const [productimage1, setproductimage1] = useState('')
  const [productimage2, setproductimage2] = useState('')
  const [processortype, setprocessortype] = useState('')
  const [processorname, setprocessorname] = useState('')
  const [network, setnetwork] = useState('')
  const [batteryinfo, setbatteryinfo] = useState('')
  const [ram, setram] = useState('')
  const [rom, setrom] = useState('')
  const [color, setcolor] = useState('')
  const [frontcamera, setfrontcamera] = useState('')
  const [rearcamera, setrearcamera] = useState('')
  const [inch, setinch] = useState('')

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
              <div className="btnContainer"><button>Create</button></div>
            </form>
        </div>

    </div>


  )
}

export default NewPhoneProduct