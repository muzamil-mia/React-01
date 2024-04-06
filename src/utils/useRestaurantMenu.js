import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

//Arrow Function
// const useRestaurantMenu = (resId) => {

//   //takes the resId fetches the data and returns the reInfo to caller
// }
//export default useRestaurantMenu



export default function useRestaurantMenu(resId) {
  const [resInfo, setResInfo] = useState(null);

  //takes the resId fetches the data and returns the reInfo to caller
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
    console.log(json);
  };
  return resInfo;
}
