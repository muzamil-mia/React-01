import { useState } from "react";
import RestaurantCategoryItems from "./RestaurantCategoryItems";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const RestaurantCategory = ({ resData, showItems, handleCategoryClick }) => {
  // const [showItems, setShowItems] = useState(false);
  //console.log("res data");
  // console.log(resData);
  const restArray = resData.itemCards;
  //console.log(restArray);
  const [isVisible, setIsVisible] = useState(false);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    //setShowItems(!showItems);
    handleCategoryClick();
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <div className="w-3/4 bg-gray-50 shadow-lg p-4 my-5 mx-auto">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">
            {resData.title} ({resData.itemCards.length})
          </span>
          <span>
            {showItems && isVisible ? (
              <IoIosArrowUp onClick={handleClick} className="cursor-pointer" />
            ) : (
              <IoIosArrowDown onClick={handleClick} className="cursor-pointer" />
            )}
          </span>
        </div>
      </div>
      {/* <div className="w-3/4 m-auto">
      {showItems && isVisible && <RestaurantCategoryItems items={resData.itemCards} />}
     
      </div> */}
      {showItems && isVisible && restArray.map((item) => {
        return <div className="flex flex-col justify-evenly">
        <RestaurantCategoryItems key = {item.card.info.id} item = {item.card.info}/>
        </div>
      })}
    </div>
  );
};

export default RestaurantCategory;
