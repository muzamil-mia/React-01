import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
 // console.log(resData);
  const { name, cuisines, cloudinaryImageId, avgRating } = resData;
  //console.log(name);
  return (
    
    <div className="card">
      <div className="image">
        <img src={CDN_URL + cloudinaryImageId} alt="card" />
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
