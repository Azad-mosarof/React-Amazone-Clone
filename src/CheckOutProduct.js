import React, {useState} from "react";
import './CheckOutProduct.css';
import { useStateValue } from "./StateProvider";

export default function CheckOutProduct(props){

    const [{basket}, dispatch] = useStateValue()
    const [isChecked, setIsChecked] = useState(true);

    function handleCheckboxChange(event) {
        setIsChecked(event.target.checked);
        //update the isChecked state
        dispatch({
            type: "UPDATE_CHECKBOX",
            id: props.item.id,
            isChecked: event.target.checked
        })
    }
  
    const checkboxStyle = {
      backgroundColor: isChecked ? 'blue' : 'transparent',
    };

    function deleteFromBusket(){
        dispatch({ 
            type: "REMOVE_FROM_BASKET",
            id: props.item.id,
        })
    }

    return (
        <div className="checkoutProduct">
            <input type="checkbox"
                    id="my-checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    style={checkboxStyle}/>
            <div>
                <img className="checkoutProduct--image" src={props.item.image} alt=""></img>
            </div>
            <div className="checkoutProduct--info">

                <div className="checkoutProduct--price--title">
                    <p className="checkoutProduct--title">{props.item.title}</p>
                    <p className="checkoutProduct--price">
                        <small>₹</small>
                        <strong>{props.item.price}</strong>
                    </p>
                </div>

                <div className="checkoutProduct--rating">
                    {Array(props.item.rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>

                <p className="checkoutProduct--instock">In stock</p>
                <p className="checkoutProduct--free--ship">Eligible for FREE Shipping</p>
                <img className="checkoutProduct--fba--img" src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt=""></img>

                <div className="checkout--gift">
                    <input type="checkbox"/>
                    <label>This will be a gift</label>
                    <label className="checkout--learn--more">Learn more</label>
                </div>

                <h5 className="checkout--size"><b>Size:</b> Medium (7.5"-8)</h5>

                <div className="checkoutproduct--options">
                    <div className="checkoutProduct--quantity">
                        <label>Qty:</label>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <h5 className="separator--vLine" onClick={deleteFromBusket}>Delete</h5>
                    <h5 className="separator--vLine">Save for later</h5>
                    <h5 className="separator--vLine">See more like this</h5>
                    <h5 className="separator--vLine">Share</h5>
                </div>

            </div>
        </div>
    )
}