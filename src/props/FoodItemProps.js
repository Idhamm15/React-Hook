import React from "react";

function FoodItemProps(props) {
    return (
        <div className="food-item">
            <h2>{props.children}</h2>
            <p>Rp. {props.harga}</p>
        </div>
    )
}

export default FoodItemProps;