import React from "react";
import menu from "./menu.png";
import "./Suggestion.css";

export default function Suggestion(props) {
    return (
        <div className="suggestion">
            <div className="suggestion-selection">
                <img src={menu} alt="" className="suggestion--logo"/>
                <h3>All</h3>
            </div>
            <div className="suggestion--items">
                <span>Amazone mini Tv</span>
                <span>Sell</span>
                <span>Best Seller</span>
                <span>Today's Deal</span>
                <span>Customer Service</span>
                <span>Prime</span>
                <span>Buy Again</span>
                <span>Books</span>
                <span>New Release</span>
                <span>Pharmacy</span>
                <span>Computers</span>
                <span>Home & Kitchen</span>
                <span>Toys & Games</span>
                <span>Health & Personal Care</span>
            </div>

            <div className="suggestion--app">
                <img src="https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt=""></img>
            </div>
        </div>
    );
}
