import React, { useState, useContext, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { StateContext } from '../../context/StateContext';
import { Button } from '../ButtonElements';
import axios from '../../axios';
import { useHistory } from 'react-router-dom';

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const [clientSecret, setClientSecret] = useState(true);

    const [{ basket }] = useContext(StateContext);
    const history = useHistory();

    useEffect(() => {

        //generate special stripe secret every time there's a change in the cart value
        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${totalPrice}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);

         const payload = await stripe.confirmCardPayment(clientSecret, {
             payment_method: {
                 card: elements.getElement(CardElement)
             }
         }).then(({paymentIntent}) => {
             //paymentIntent = payment confirmation

             setSucceeded(true);
             setError(null);
             setProcessing(null);

             history.replaceState('/orders')
         }) 
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
                {error && <div>{error}</div>}
            </form>
        </div>
    )
}

export default PaymentForm

