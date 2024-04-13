import { useState } from "react";
import RestaurantCategoryItems from "./RestaurantCategoryItems";
const RestaurantCategory = ({ resData, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  //console.log(resData);

  const handleClick = () => {
    //setShowItems(!showItems);
    setShowIndex();
  }
  return (
    <div>
      <div className="w-8/12 bg-gray-50 shadow-lg p-4 my-5 mx-auto">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {resData.title} ({resData.itemCards.length})
          </span>
          <span>
            <i class="bx bx-chevron-down"></i>
          </span>
        </div>
        {showItems && <RestaurantCategoryItems items={resData.itemCards} />}
      </div>
      
    </div>
  );
};

export default RestaurantCategory;
