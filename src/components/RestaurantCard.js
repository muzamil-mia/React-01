import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
 // console.log(resData);
  const { name, cuisines, cloudinaryImageId, avgRating } = resData;
  //console.log(name);
  return (
    
    <div className="m-4 p-4 w-[300px] h-[400px] rounded-lg border-4">
      <div className="rounded-lg border-4 h-2/3">
        <img className="w-auto " src={CDN_URL + cloudinaryImageId} alt="card" />
      </div>
      <div className="details">
        <span className="card-title">{name}</span>
       <span className="card-tags">{cuisines.join(", ")}</span>
         <span className="card-rating">{avgRating}</span>
         {/* <h4>{lastMileDistance} minutes</h4> */}
      </div>
     </div>
  );
};
export default RestaurantCard;
