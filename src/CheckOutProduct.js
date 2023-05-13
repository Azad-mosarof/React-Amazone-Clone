import React, {useState} from "react";
import './CheckOutProduct.css';
import { useStateValue } from "./StateProvider";

export default function CheckOutProduct(props){

    const [isChecked, setIsChecked] = useState(true);

    function handleCheckboxChange(event) {
      setIsChecked(event.target.checked);
    }
  
    const checkboxStyle = {
      backgroundColor: isChecked ? 'blue' : 'transparent',
    };

    const [{basket}, dispatch] = useStateValue()

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
                    {console.log(Array(props.item.rating))}
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

                    <div classname="separator--vLine"></div>
                    <h5 onClick={deleteFromBusket}>Delete</h5>
                    <div classname="separator--vLine"></div>
                    <h5>Save for later</h5>
                    <div classname="separator--vLine"></div>
                    <h5>See more like this</h5>
                    <div classname="separator--vLine"></div>
                    <h5>Share</h5>
                </div>

            </div>
        </div>
    )
}