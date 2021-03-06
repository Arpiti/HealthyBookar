import React, { useContext } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';
import { StateContext } from '../../context/StateContext';
import { SubtotalWrap, SubtotalHeading, SubtotalInfo, SubtotalSmallHeading } from './SubtotalElements';

const Subtotal = ({ showPriceCalculateMessage }) => {

    const [{ basket }] = useContext(StateContext);
    const history = useHistory();

    console.log('basket in subtotal now >', basket[0]);

    // this method is capable to add prices for mutiple products, though we have not allowed basket to contain more than one product for now.
    const totalPrice = basket.reduce((sum, product) => {
        return sum + Number(product.price);
    }, 0);

    return (
        <SubtotalWrap>
            <SubtotalHeading>Total Amount</SubtotalHeading>
            <SubtotalSmallHeading>(This price is inclusive of GST)*</SubtotalSmallHeading>
            {showPriceCalculateMessage ?
                (<SubtotalInfo> Press Calculate Button (in 1st Section) </SubtotalInfo>)
                :
                (<CurrencyFormat renderText={(value) => (
                    <>
                        <SubtotalInfo>
                            {value}
                        </SubtotalInfo>
                    </>
                )}
                    decimalScale={2}
                    value={totalPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"₹"}>

                </CurrencyFormat>)
            }

        </SubtotalWrap>
    );
}

export default Subtotal;
