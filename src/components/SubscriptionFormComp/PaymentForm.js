import React, { useState, useContext } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { StateContext } from '../../context/StateContext';
import { Button } from '../ButtonElements';

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const [{ basket }] = useContext(StateContext);


    const handleSubmit = () => {

    }

    const handleCardChange = (event) => {
        // Listen for changes in the cardElement
        // display any errors for the card

        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    const totalPrice = basket.reduce((sum, product) => {
        return sum + Number(product.price);
    }, 0);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement onChange={handleCardChange} />
                <div>
                    <CurrencyFormat renderText={(value) => (
                        <>
                           <h4> Order Total: {value}</h4>
                        </>
                    )}
                        decimalScale={2}
                        value={totalPrice}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"₹"}>

                    </CurrencyFormat>
                    <button disabled={processing || disabled || succeeded}>
                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PaymentForm

