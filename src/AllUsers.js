import React,{useState,useEffect} from 'react'
import './AllOders.css'
const Allusers = ({page}) => {
    const [allUsers, setallUsers] = useState([])
    useEffect(()=>{
            fetch('http://localhost:3000/users')
            .then(res=>res.json())
            .then(res=>{
                res.reverse()
                setallUsers(res)
                })
    },[])
    console.log(allUsers)
    console.log(page)
    
  return (
    <div className='AllOders'>
         <table>
                <thead>
                    <tr>
                        <th><h3>name</h3></th>
                        <th><h3>email</h3></th>
                        <th><h3>Date joined</h3></th>
                        <th><h3>Edit</h3></th>
                        <th><h3>Message</h3></th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map(data=>{
                    return <tr>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.date}</td>
                                <td key={data.id} ><button className="delete">Delete</button></td>
                                <td key={data.id} ><button className="msg" onClick={()=>page('users')}>Message</button></td>
                            </tr>
                            {/* <p>{data.productname}</p> */}
                    
                    })}
                   
                </tbody>
            </table>
           

    </div>
  )
}

export default Allusers