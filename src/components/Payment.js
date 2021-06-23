import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../context/StateContext';
import '../Payment.css';
import CheckoutProduct from './CheckoutProduct';


const Payment = () => {

    const [{basket, user}, dispatch] = useContext(StateContext);
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout">{basket?.length}</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h2>Delivery Address</h2>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Sec-I, Jankipuram</p>
                        <p>Lucknow, 226031, UP, India</p>
                    </div>
                    
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h2>Review items and Delivery</h2>
                    </div>
                    <div className="payment__items">
                        <CheckoutProduct/>
                    </div>
                    
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h2>Payment Method</h2>
                    </div>
                    <div className="payment__details">
                         {/* payment method */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
