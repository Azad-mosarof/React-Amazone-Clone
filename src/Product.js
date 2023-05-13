import React from "react";
import './Product.css';
import { useStateValue } from "./StateProvider";

export default function Product(props) {

    const [{basket}, dispatch] = useStateValue()

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.item.id,
                title: props.item.title,
                image: props.item.image,
                price: props.item.price,
                rating: props.item.rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product--info">
                <p className="product--title">{props.item.title}</p>
                <div className="price--rating">
                    <p className="product--price">
                        <small>₹ </small>
                        <strong>{props.item.price}</strong>
                    </p>
                    <div className="product--rating">
                        {Array(props.item.rating).fill().map((_, i) => (
                            <p className="star">⭐</p>
                        ))}
                    </div>
                </div>
            </div>
            <img src={props.item.image} alt=""></img>
            <button className="add--button" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}