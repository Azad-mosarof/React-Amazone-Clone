import React from "react";
import './TodaysDeal.css'
import TodaysDealsData from "./TodaysDealsData";


export default function TodaysDeal(){

    const deal = TodaysDealsData.map((item) => {
        return (
            <div className="deal--item" key={item.id}>
                <img src={item.url} alt={item.title} className="deal--img"></img>
                <div className="deal--item--offer">
                    <span className="offer-percent">Up to {item.offer}% off</span>
                    <p>Deal of the Day</p>
                </div>
                <div className="deal--item--title">{item.title}</div>
            </div>
        )})

    return (
        <div className="todays--deal">
            <div className="todays--header">
                <h2 className="title">Today's Deals</h2>
                <a href="">See all deals</a>
            </div>
            <div className="deal--container">
                {deal}
            </div>
        </div>
    )
}