import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { RESTAURANT_LIST as restaurants } from "../utils/constants";
//console.log(restaurants);
import Shimmer from "./Shimmer";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const RestaurantList = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  {
    /* implementing higher order component functionality */
  }
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const {loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4375084&lng=78.4482441&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log("json data from api");
    const restaurantsArray =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants;
    setRestaurantsList(restaurantsArray);
    setFilteredRestaurants(restaurantsArray);
  };
  //console.log(restaurantsList);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline check your internet connection....</h1>
    );
  }
  // if(restaurantsList.length == 0) {
  //   return(
  //     <h1>Loading...</h1>
  //   )
  // }
  //console.log("body rendered");

  return restaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between border-4 w-[600px] m-auto mt-5">
        <div className="w-[400px] border-2">
          <input
            type="text"
            className="border-solid border-2 border-black p-2 w-[300px]"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="border-solid border-2 p-2 w-[96px]"
            onClick={() => {
              const filteredList = restaurantsList.filter((res) => {
                console.log(res);
                return res.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });
              //console.log(res.info.name)
              setFilteredRestaurants(filteredList);
              console.log(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border-2 p-2 w-[96px]"
          onClick={() => {
            const filteredList = restaurantsList.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
           // console.log(filteredList);
          }}
        >
          top
        </button>
        <div>
          <label htmlFor="">user Name</label>
          <input type="text" className="border border-2 p-2"
          value = {loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap  border-4">
        {filteredRestaurants.map((res) => (
          // console.log(res.info.id)
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            {res.info.isOpen ? (
              <RestaurantCardPromoted resData={res.info} />
            ) : (
              <RestaurantCard resData={res.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
