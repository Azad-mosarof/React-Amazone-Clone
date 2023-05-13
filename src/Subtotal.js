import React from "react";
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";

export default function Subtotal(){

    const [{basket}, dispatch] = useStateValue()

    const totalPrice = basket?.reduce((total, item) => total + item.price, 0)

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket?.length} items): <strong>{value}</strong></p>
                        <small className="subtotal--gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                        <button className="subtotal--button">Proceed to Checkout</button>
                    </>
                )}
                decimalScale={2}
                value={totalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
        </div>
    )
}
