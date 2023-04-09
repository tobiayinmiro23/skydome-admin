import React,{useState,useEffect} from 'react'
import './AllOders.css'
const AllOders = () => {
    const [allOrders, setallOrders] = useState([])
    useEffect(()=>{
            fetch('http://localhost:3000/cleared')
            .then(res=>res.json())
            .then(res=>{
                res.reverse()
                setallOrders(res)
                })
    },[])
    console.log(allOrders)
    
  return (
    <div className='AllOders ll'>
         <table>
                <thead>
                    <tr>
                        <th><h3>Product name</h3></th>
                        <th><h3>Product price</h3></th>
                        <th><h3>Product quantity</h3></th>
                        <th><h3>buyers name</h3></th>
                        <th><h3>email</h3></th>
                        <th><h3>phonenumber</h3></th>
                        <th><h3>address</h3></th>
                        <th><h3>order date</h3></th>
                        <th><h3>Payment status</h3></th>
                        <th><h3>Delete</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map(data=>{
                        
                        return    <tr>
                                <td>{data.productname}</td>
                                <td>{data.pproductprice}</td>
                                <td>{data.productquantity}</td>
                                <td>{data.buyersname}</td>
                                <td>{data.email}</td>
                                <td>{data.phonenumber}</td>
                                <td>{data.address}</td>
                                <td>{data.orderdate}</td>
                                <td>{data.paymentstatus}</td>
                                <td><button style={{background:'red'}} className="delete">Delete</button></td>
                            </tr>
                            {/* <p>{data.productname}</p> */}
                    
                    })}
                   
                </tbody>
            </table>
           

    </div>
  )
}

export default AllOders