import React,{useState} from 'react'
import './Container.css'
import AllProduct from './AllProducts';
import LaptopProduct from './LaptopProduct';
import PhoneProduct from './PhoneProduct';
import ShoeProduct from './ShoeProduct';
import NewLaptopProduct from './NewLaptopProduct';
import NewPhoneProduct from './NewPhoneProduct';
import NewShoeProduct from './NewShoeProduct';
import AllOders from './AllOders';
import NewGeneralProduct from './NewGeneralProduct';
import UpdateGeneralProduct from './UpdateGeneralProduct';
import UpdatePhoneProduct from './UpdatePhoneProduct';
import UpdateLaptopProduct from './UpdateLaptopProduct';
import UpdateShoeProduct from './UpdateShoeProduct';
import Allusers from './AllUsers';
import MessageUser from './MessageUser';
import Login from './Login';

const Container = () => {
    const [menu, setmenu] = useState(false)
    const [page, setpage] = useState('allProducts')
    const RevealMenu=()=>{
        let menu=document.querySelector('.routes')
        menu.classList.toggle('reveal')
    }
    console.log(page)
    const handelPage=(item)=>{
      setpage(item)
    }
  return (
    <div className='Container'>
      <div>
        <nav >
        <div className="navigation" onClick={RevealMenu}>
          <div  className="menu-container">
            <img src="/skydome images/icons8-menu-24.png" alt="" />
          </div>
          <div className="company-name-container">
            <div className="company-logo-container">
              <img
                src="/skydome images/cube_geek_magic_rubics_toy_icon_183195.ico"
                alt=""
              />
            </div>
            <div className="company-name">
              <h1>
                SkyDome 
              </h1>
            </div>
          </div>
          <div className="cart-container" title="my cart"></div>
        </div>
      </nav>
      </div>
      <div className="componentsContainer">
          <div className="routes">
            <details>
              <summary>Products</summary>
              <p onClick={()=>setpage('allProducts')}>All products</p>
              <p onClick={()=>setpage('laptopProducts')}>Laptops</p>
              <p onClick={()=>setpage('phoneProducts')}>Phones</p>
              <p onClick={()=>setpage('shoeProducts')}>Shoes</p>
            </details>
            <details>
              <summary>Update Products</summary>
              <p  onClick={()=>setpage('updateLaptopProducts')}>Laptops</p>
              <p onClick={()=>setpage('updatePhoneProducts')}>Phones</p>
              <p onClick={()=>setpage('updateShoeProducts')}>Shoes</p>
              <p onClick={()=>setpage('updateClothesProducts')}>Clothes</p>
            </details>
            <details>
              <summary>Create Products</summary>
              <p onClick={()=>setpage('createLaptopProducts')}>Laptop</p>
              <p onClick={()=>setpage('createPhoneProducts')}>Phones</p>
              <p onClick={()=>setpage('createShoeProducts')}>Shoes</p>
              <p onClick={()=>setpage('createClothesProducts')}>Clothes</p>
            </details>
            <hr />
              <p onClick={()=>setpage('orders')}>Orders</p>
              <p onClick={()=>setpage('users')}>Users</p>
          </div>
          <div  className="c2">
            <div className="routeName"></div>
                  <div className="components">
                    { page==='login' && <Login/>}
                    { page==='allProducts' && <AllProduct/>}
                    { page==='laptopProducts' && <LaptopProduct/>}
                    { page==='phoneProducts' && <PhoneProduct/>}
                    { page==='shoeProducts' && <ShoeProduct/>}
                    { page==='updateLaptopProducts' && <UpdateLaptopProduct/>}
                    { page==='updatePhoneProducts' && <UpdatePhoneProduct/>}
                    { page==='updateShoeProducts' && <UpdateShoeProduct/>}
                    { page==='updateClothesProducts' && <UpdateShoeProduct/>}
                    { page==='updateGnenralProducts' && <UpdateGeneralProduct/>}
                    { page==='createLaptopProducts' && <NewLaptopProduct/>}
                    { page==='createPhoneProducts' && <NewPhoneProduct/>}
                    { page==='createShoeProducts' && <NewShoeProduct/>}
                    { page==='createClothesProducts' && <NewShoeProduct/>}
                    { page==='createGeneralProduct' && <NewGeneralProduct/>}
                    { page==='orders' && <AllOders/>}
                    { page==='users' && <Allusers page={handelPage}/>}
                    { page==='message' && <MessageUser/>}
                  </div>
          </div>
      </div>

    </div>
  )
}

export default Container