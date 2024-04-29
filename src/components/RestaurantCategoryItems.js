import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";


const RestaurantCategoryItems = ({ item }) => {
  //console.log(item)
  const { id, name, description, price, imageId, defaultPrice } = item;
  const [itemCount, setItemCount] = useState(0);

  const dispatch = useDispatch();

  const handleAddItem = ( item ) => {
    //dispatch an action
    //console.log(item);

    dispatch(addItem(item)); //addItem("item") will go as second argument addItem action and payload will be item we are sending
    setItemCount(itemCount + 1);
  };

  const handleRemoveItem = (item) => {
    let updatedCount;
    dispatch(removeItem(item));
    updatedCount = itemCount > 0 ? itemCount - 1 : 0;
    setItemCount(updatedCount);
  };

  const clip = (text) => {
    const words = text.split(" ");
    if (words.length > 30) {
      // Join the first maxWords words and append '...' to indicate clipping
      return words.slice(0, 30).join(" ") + "...";
    }
  };
  return (
    // <div className="w-full">
    //   {items.map((item) => (
    //     <div
    //       key={item.card.info.id}
    //       className="p-2 m-2  border-b-2 text-left ml-0 flex justify-between w-full"
    //     >
    //       <div className="w-9/12">
    //         <div className="py-2">
    //           <span className="font-bold">{item.card.info.name}</span>
    //           <span>
    //             - ₹{" "}
    //             {item.card.info.price / 100 ||
    //               item.card.info.defaultPrice / 100}
    //           </span>
    //         </div>
    //         <p className="mt-3.5 leading-5 text-gray-desc w-4/5 text-base overflow-hidden">{clip(item.card.info.description)}</p>
    //       </div>
    //       <div className="relative flex flex-col justify-center items-center w-[200px] h-[180px]">
    //         {item.card.info.imageId && (<img
    //           src={CDN_URL + item.card.info.imageId}
    //           className="w-[200px] h-[130px] object-cover rounded-lg mb-4"
    //         />
    //         )}
    //         <div className=" flex justify-evenly items-center w-[130px] h-[34px] mt-2.5 text-gray-count outline-none border bg-white border-gray">
    //           <button className="text-xl text-gray-count font-semibold" onClick={() => handleRemoveItem(item.card.info.id)}>
    //             {" "}-{" "}
    //           </button>
    //           <span className="text-base text-Red"> {itemCount} </span>
    //           <button className="text-xl text-gray-count font-semibold" onClick={() => handleAddItem(item.card.info)}>
    //             {" "}+{" "}
    //           </button>
    //         </div>
    //       </div>

    //     </div>
    //   ))}
    // </div>
    <div
      className="flex justify-between basis-[800px] max-h-[300px] p-5 border-b border-black"
      key={id}
    >
      <div className="flex flex-col basis-[400px]">
        <h3 className="font-bold text-lg w-3/5">{name}</h3>
        <p className="mt-1 text-base font-normal">
          ₹{price / 100 || defaultPrice / 100}
        </p>
        <p className="mt-3.5 leading-5 text-grey-desc w-4/5 text-base overflow-hidden">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[200px] h-[180px]">
        {imageId && (
          <img
            className="w-[200px] h-[130px] object-cover rounded-lg mb-4"
            src={CDN_URL + imageId}
            alt={item?.name}
          />
        )}
        <div className="flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none bg-white border border-gray">
          <button className="text-lg text-gray-count font-semibold" onClick={()=> handleRemoveItem(item)}>
          {" "}
            -{" "}
          </button>
          <span className="text-base text-green">{itemCount}</span>
          <button className="text-green text-xl" onClick={() => handleAddItem(item)}>
          {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategoryItems;
