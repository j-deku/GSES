import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'

import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';
const MyOrders = () => {

    const {url,token} = useContext(StoreContext);
    const [data,setData] = useState([]);

    const fetchOrders = async () => {
        const response = await axios.post(url + "/api/order/userOrders", {}, { headers: { token } });
        console.log(response.data.data);
        setData(response.data.data);
    };
    
    useEffect(() =>{
        if(token){
            fetchOrders();
        }
    },[token])

  return (
    <div className='my-orders'>
    <h2>My Orders</h2>
    <div className="container"> 
    {data.map((order, index) => {
    const items = order.items || []; 
    return (
        <div key={order._id || index} className="my-orders-order">
            <img src={assets.Parcel} alt="" />
            <p>
                {items.map((item, index) => {
                    return (
                        <React.Fragment key={item._id || index}>
                            {item.name} x {item.quantity}
                            {index < items.length - 1 ? ", " : ""}
                        </React.Fragment>
                    );
                })}
            </p>
            <p>${order.amount}.00</p>
            <p>Items: {items.length}</p>
            <p>
                <span>&#x25cf;</span> <b>{order.status}</b>
            </p>
            <button onClick={fetchOrders}>Track Order</button>
        </div>
    );
})}
    </div>
    </div>
  )
}

export default MyOrders
