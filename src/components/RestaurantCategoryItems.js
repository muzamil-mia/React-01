import { CDN_URL } from "../utils/constants";
const RestaurantCategoryItems = ({ items }) => {
  //console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div  key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left ml-0 flex justify-between">
        <div className="w-9/12">
          <div className="py-2">
            <span className="font-bold">{item.card.info.name}</span>
            <span>
              - ₹{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p>{item.card.info.description}</p>
        </div>
        <div className="w-3/12">
          <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
          <button className="p-2 bg-white shadow-lg absolute mb-6">Add +</button>
        </div>
        </div>
        
      ))}
    </div>
  );
};

export default RestaurantCategoryItems;
