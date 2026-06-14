import { CLOUDINARY_URL } from "../utilis/contants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;
  // console.log(CLOUDINARY_URL, "CLOUDINARY_URL");

  return (
    <div className="card">
      <img
        className="cardImage"
        src={CLOUDINARY_URL + cloudinaryImageId}
        alt={name}
      />

      <div className="cardContent">
        <h3>{name}</h3>
        <p>{cuisines}</p>
        <p>{avgRating}</p>
        <p>{sla.deliveryTime}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
