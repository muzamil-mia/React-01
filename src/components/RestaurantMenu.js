import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  },[])

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId
    );
    const json = await data.json();
    //console.log(json);
    setResInfo(json);
  }
  if(resInfo === null) {
    return <Shimmer/>
  } 
  //console.log(resInfo?.data?.cards[2]);
   const {name, cuisines, costForTwo} = resInfo?.data?.cards[2]?.card?.card?.info;
   //console.log(name);
    //console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card);
   const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
       {itemCards.map((item) => <li key = {item.card.info.id}>{item?.card?.info?.name} - Rs{item.card.info.price/100}</li>
       )}
      </ul>
    </div>
  )
}

export default RestaurantMenu;