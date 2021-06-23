import React, { useContext } from 'react';
import { StateContext } from '../context/StateContext';
import '../CheckoutProduct.css';
const CheckoutProduct = () => {

    const [{ basket }, dispatch] = useContext(StateContext);

    const removeFromBasket = (id) => {
        dispatch ({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }

    return (
        <div>
            {
                basket.map(product => {
                    return (
                        <li key={product.id}>
                            <div className="checkoutProduct__product">
                                <img className="checkoutProduct__image" src={product.imgSrc} alt={`${product.id} img`} />
                                <div className="checkoutProduct__info">
                                    <p>{product.title}</p>
                                    <div className="checkoutProduct__rating">
                                        {Array(Number(product.rating)).fill(0).map((_, i) => <p key={i}>⭐️</p>)}
                                    </div>
                                    <p className="checkoutProduct__price">
                                        <small>₹</small>
                                        <strong>{product.price}</strong>
                                    </p>
                                    <button onClick={() => removeFromBasket(product.id)} className="checkoutProduct__remove">Remove from Basket</button>
                                </div>



                            </div>
                        </li>
                    )
                })
            }

        </div>
    );
}

export default CheckoutProduct;
