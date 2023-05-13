import React from "react";
import './CategoryCard.css'

export default function CategoryCard(props) {

    const row1 = props.item.subCategory.slice(0,2).map((subItem) => (
        <div className="sub--product">    
            <img src={subItem.url} alt="" className="product--img"></img>
            <p className="product--title">{subItem.title}</p>
        </div>
    ))

    const row2 = props.item.subCategory.slice(2,4).map((subItem) => (
        <div className="sub--product">    
            <img src={subItem.url} alt="" className="product--img"></img>
            <p className="product--title">{subItem.title}</p>
        </div>
    ))

    return (
        <div className="products--grid">
            <h2 className="category--title">{props.item.category}</h2>
            <div className="rows">
                <div className="row1">
                    {row1}
                </div>
                <div className="row1">
                    {row2}
                </div>
            </div>
            <a href="/" className="see--more">See more</a>
        </div>
    )
}