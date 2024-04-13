import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

   const {resId} = useParams();
  
  //creating custom hook
  const resInfo = useRestaurantMenu(resId);
  //console.log(resInfo);

  const [showIndex, setShowIndex] = useState(0);

  // useEffect(() => {
  //   fetchMenu();
  // },[])

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId
  //   );
  //   const json = await data.json();
  //   //console.log(json);
  //   setResInfo(json);
  // }
  if(resInfo === null) {
    return <Shimmer/>
  } 
  // //console.log(resInfo?.data?.cards[2]);
  // console.log(resInfo);
  // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  
   //console.log(name);
   const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     // console.log(itemCards);

   const resCategories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   //console.log(resCategories);
  return (
    <div className="menu">
      <h2 className="text-center font-bold my-6 text-2xl">Roti wala</h2>
      {/* <ul>
       {itemCards.map((item) => <li key = {item.card.info.id}>{item?.card?.info?.name} - Rs{item.card.info.price/100 || item?.card?.info?.defaultPrice/100}</li>
       )}
      </ul> */}
      {
        resCategories.map((category, index) => {
          return <RestaurantCategory resData = {category?.card?.card} showItems = {index === showIndex ? true : false}
            setShowIndex = {() => setShowIndex(index)}
          />
          
        })
      }
    </div>
  )
}

export default RestaurantMenu;