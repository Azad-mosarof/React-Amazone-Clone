import React from "react";
import './Home.css';
import data from './data'
import Product from "./Product";
import CategoryData from "./CategoryData";
import CategoryCard from "./CategoryCard";
import TodaysDeal from './TodaysDeal';

export default function Home(){

    const productlist1 = data.slice(0,4).map((item) => {
        return <Product 
            key={item.id}
            item={item} />
    })

    const productlist2 = CategoryData.map((item) => {
        return <CategoryCard
            key = {item.id}
            item = {item}/>
    })

    return (
        <div className="home">
            <div className="home--container">
                <img className="home--image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/3000x1200._CB590231625_.jpg" alt=""></img>
                    
                
                <div className="home-row-product">
                    <div className="home--row">
                        {productlist1}
                    </div>

                    <div className="home--row">
                        {productlist2}
                    </div>
                    <TodaysDeal/>
                </div>

            </div>
        </div>
    )
}
                    