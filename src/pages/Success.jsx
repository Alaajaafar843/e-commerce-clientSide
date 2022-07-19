import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { userRequest } from '../requestMethod';
import { useDispatch } from 'react-redux';
import { reset } from '../redux/cartRedux';




const Success = () => {

    const location = useLocation();
    const data = location.state.stripData;
    const cart = location.state.cart;
    const currentUser = useSelector((state) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);
    const dispatch = useDispatch();

    console.log(data, cart, currentUser);

    const clearCart = () => {
        dispatch(reset())
    }

    useEffect(() => {


        const createOrder = async () => {
            try {
                const res = await userRequest.post("/orders/", {
                    userId: currentUser._id,
                    products: cart.products.map((product) => (
                        {
                            productId: product._id,
                            quantity: product._quantity

                        }

                    )),

                    amount: cart.total,
                    address: data.billing_details.address

                });

                setOrderId(res.data._id);
                console.log(res.data);

            } catch (error) {
                console.log(error)
            }
        }

        data && createOrder();

    }, [cart, data, currentUser])

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {orderId
                ? `Order has been created successfully. Your order number is ${orderId}`
                : `Successfull. Your order is being prepared...`}
            <Link to="/"><button onClick={clearCart} style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button></Link>
        </div >
    );
};

export default Success;