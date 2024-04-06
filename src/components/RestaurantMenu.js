import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

   const {resId} = useParams();
  
  //creating custom hook
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

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
  console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
  
   //console.log(name);
   const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //    console.log(itemCards);
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
       {itemCards.map((item) => <li key = {item.card.info.id}>{item?.card?.info?.name} - Rs{item.card.info.price/100 || item?.card?.info?.defaultPrice/100}</li>
       )}
      </ul>
    </div>
  )
}

export default RestaurantMenu;