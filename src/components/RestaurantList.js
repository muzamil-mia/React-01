import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST as restaurants } from "../utils/constants";
console.log(restaurants);
import { useState } from "react";

const RestaurantList = () => {
  let [restaurantsList, setRestaurantsList] = useState(restaurants);
  console.log(restaurantsList)
  return (
    <div className="body">
    <div className="filter">
      <button className="filter-btn" onClick={() => {
        const filteredRestaurants = restaurantsList.filter((res) => {
         return res.info.avgRating > 4.3;
        })
       setRestaurantsList(filteredRestaurants)
      }}>
      Top Rated
      </button>
    </div>
   <div className="restaurant-list">
          {restaurantsList.map((res) => {
            console.log(res)
            return <RestaurantCard key={res.info.id} resData={res.info} />;
          })}
      </div>
    </div>
  );
};

export default RestaurantList;
