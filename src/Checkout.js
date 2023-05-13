import React from "react";
import './Checkout.css';
import Subtotal from "./Subtotal";
import CheckOutProduct from "./CheckOutProduct";
import { useStateValue } from "./StateProvider";

export default function Checkout(){

    const [{basket}, dispatch] = useStateValue()
    const checoutProducts = basket.map((item) => (
        <CheckOutProduct item={item}/>
    ))

    function deselect(){
        dispatch({
            type: "DESELECT_ALL"
        })
    }

    return (
        <div className="checkout">
            <div className="checkout--container">
                <div className="checkout--left">
                    <div>
                        <div className="checkout--title--price">
                            <h2 className="checkout--title">Shopping Cart</h2>
                            <h5 className="deselect" onClick={deselect}>Deselect all items</h5>
                            <div className="right--element">
                                <h5 className="total--price">Price</h5>
                            </div>
                        </div>
                        
                        {checoutProducts}
                    </div>
                </div>

                <div className="checkout--right">
                    <Subtotal/>
                </div>
            </div>
        </div>
    )
}