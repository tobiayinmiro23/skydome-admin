import './App.css';

import { useState } from 'react';
// import { AllProductsDB } from './AllProductsDb';
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
import Container from './Container';
function App() {
  const [page, setpage] = useState('login')
  const handlePage=(param)=>{
        setpage(param)
  }
 
  return (
    <div className="App">
      {
        page==='login'
        ?
        <Login page={handlePage}/>
        :
       <Container/>
      }
      </div>
    
  );
}

export default App;
