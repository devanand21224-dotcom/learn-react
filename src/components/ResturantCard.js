import { CLOUDINARY_URL } from "../utilis/contants";

const RestaurantCard = ({ resData }) => {
  console.log(resData, "card")


  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData

  
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
        {/* <p>{sla.deliveryTime}</p> */}
      </div>
    </div>
  );
};



//High order function
//iput --Restaurant card ====> ResturantCradVegLabel


export const withVegLabelCard = (RestaurantCard) => {
  return (resData) => {
    console.log(resData, "inhoc")
    return (
      <div>
        <label> Veg</label>
        <RestaurantCard resData={resData} />
      </div>
    )

  }
}

export default RestaurantCard;
