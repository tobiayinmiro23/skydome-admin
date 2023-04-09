import React from 'react';

function EcommerceTest() {
    const postingData=()=>{
        fetch('http://localhost:3000/products',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                    no: 3,
                    id: 'c2',
                    productname: 'lenovo legion 5',
                    productprice: '650,000',
                    productinfo: 'lenovo legion 5 15IMH05 10th generation laptop',
                    productimage1: '/skydome images/lenovo-legion-5-img1.png',
                    productimage2: '/skydome images/lenovo-legion-5-img2.jpeg',
                    processortype: 'intel',
                    processorname: 'corei7',
                    brand: 'lenovo',
                    batteryinfo: 'integrated 60Wh',
                    ram: '8gb',
                    rom: '512gb ssd',
                    windowversion: 'windows 10 home',
                    color: 'black',
                    touchscreen: 'no',
                    netweight: '1.3kg',
                    inch: '15.6',
                    gaminggraphics: 'NVIDIA GTX 4GB GDDR6',
                    network: null,
                    frontcamera: null,
                    rearcamera: null,
                    shoesize: null
            }

             )
        }).then(res=>res.json())
        .then(user=>{
            console.log(user)
        }).catch(err=>console.log('an error occured'))
          
        
    }
  return <div>
      <h1>testing ecommerce database</h1>
      <button onClick={postingData}>post data</button>
  </div>;
}

export default EcommerceTest;
