import React, { useContext } from 'react';
import '../Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { StateContext } from '../context/StateContext';
import { useHistory } from 'react-router';

const Subtotal = () => {

    const [{basket}] = useContext(StateContext);
    const history = useHistory();

    const totalPrice = basket.reduce((sum, product) => {
         return sum+Number(product.price);
        },0);
   
    return (
        <div className="subtotal">
            <h3>Your subtotal amount goes here</h3>
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains gift
                    </small>
                </>
            )}
            decimalScale = {2}
            value={totalPrice}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}>

            </CurrencyFormat>
            
            <button className="subtotal__button" onClick={(e) => history.push('/payment')}> Proceed to Checkout </button>
        </div>
    );
}

export default Subtotal;
