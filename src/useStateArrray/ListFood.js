import { useState } from "react";
import FoodItem from "./FoodItem";



const ListFood = () => {
    const [foods, listFood] = useState   ([
        {
            id: Math.random(),
            namaMakanan : "Tempe",
            harga : "9000"
        },
        {
            id: Math.random(),
            namaMakanan : "Tahu",
            harga : "9000"
        },
        {
            id: Math.random(),
            namaMakanan : "Sambal",
            harga : "9000"
        },
        {
            id: Math.random(),
            namaMakanan : "Susu Kedelai",
            harga : "9000"
        },
    ]);
    return (
        <div>
            {
                foods.map(food => (
                    <FoodItem key={food.id} harga={food.harga}>{food.namaMakanan}</FoodItem>
                )
            )}
        </div>
    )
};

export default ListFood;