import React, { useState, useContext, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { StateContext } from '../../context/StateContext';
import { Button } from '../ButtonElements';
import axios from '../../axios';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase/config';
import { useStateValue } from '../../context/StateContext';

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const [clientSecret, setClientSecret] = useState(true);

    const [{ basket, user }] = useContext(StateContext);
    const [state, dispatch] = useStateValue();

    const history = useHistory();

    useEffect(() => {

        //generate special stripe secret every time there's a change in the cart value
        const getClientSecret = async() => {
            const response = await axios({
                // amount is multiplied by 100 as Stripes take payment in Indian paise.
                method: 'post',
                url: `/payments/create?total=${totalPrice*100}`
            });
            setClientSecret(response.data.clientSecret);
        }
        getClientSecret();
    }, [basket]);

    console.log('The secret is >>', clientSecret);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);

       

         const payload = await stripe.confirmCardPayment(clientSecret, {
             payment_method: {
                 card: elements.getElement(CardElement)
             }
         }).then(({paymentIntent}) => {
             //paymentIntent = payment confirmation
             console.log('Basket is', basket);
             const items = basket; 

             db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket[0],
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

             setSucceeded(true);
             setError(null);
             setProcessing(null);

             dispatch({
                 type: 'EMPTY_BASKET'
             })
             history.replace('/order')
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

