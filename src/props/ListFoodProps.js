import FoodItemProps from "./FoodItemProps";



const ListFoodProps = () => {
    return (
        <div>
            <FoodItemProps harga="9000">Tempe</FoodItemProps>
            <FoodItemProps harga="10000">Tahu</FoodItemProps>
            <FoodItemProps harga="1000">Sambal</FoodItemProps>
            <FoodItemProps harga="5000">Susu Kedelai</FoodItemProps>
        </div>
    )
}

export default ListFoodProps;