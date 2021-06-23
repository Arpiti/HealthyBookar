import React, { useContext } from 'react';
import { StateContext } from '../context/StateContext';
import '../Product.css';

const Product = (props) => {
    const {id, title, rating, price, imgSrc} = props;

    const [{basket}, dispatch] = useContext(StateContext);

    const addTobasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                rating: rating,
                price: price,
                imgSrc: imgSrc
            }
        })
    }

    let ratingStars= '';
    
    let ratingNo = parseInt(rating); 
    if(Number.isInteger(ratingNo))
    {
        for (let i=1;i<=ratingNo;i++)
        ratingStars=ratingStars+'🌟';
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <div className="product__rating">
                    <p>{ratingStars}</p>
                </div>
                <div className="product__price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </div>
            </div>
            <img src={imgSrc} alt="product1 img" className="product__image" />
            <div>
                <button onClick={addTobasket}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product;