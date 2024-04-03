import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_LIST as restaurants } from "../utils/constants";
//console.log(restaurants);
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //console.log(restaurantsList)
  const [searchText, setSearchText] = useState("");
  //console.log(searchText)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4375084&lng=78.4482441&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json data from api");
    const restaurantsArray =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants;
    setRestaurantsList(restaurantsArray);
    setFilteredRestaurants(restaurantsArray);
  };
  // if(restaurantsList.length == 0) {
  //   return(
  //     <h1>Loading...</h1>
  //   )
  // }
  //console.log("body rendered");
  const handleTopRatedFilter = () => {
    
  };
  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => {
            const filteredList = restaurantsList.filter((res) => {
              console.log(res)
              return res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
            });
            //console.log(res.info.name)
            setFilteredRestaurants(filteredList);
            console.log(filteredList)
          }}>Search</button>
        </div>
        <button onClick={() => {
          const filteredList = restaurantsList.filter(res => res.info.avgRating > 4.3);
          setFilteredRestaurants(filteredList)
          console.log(filteredList);
        }}>
        top
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((res) => (
        // console.log(res.info.id)
        <Link key={res.info.id} to={"/restaurants/" + res.info.id}><RestaurantCard resData={res.info} /></Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
