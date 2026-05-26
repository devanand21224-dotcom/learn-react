import RestaurantCard from "./ResturantCard";
import restaurantData from "../utilis/mockData";

const Body = () => {
  return (
    <div className="cardContainer">
      {restaurantData.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} />
      ))}
    </div>
  );
};


export default Body;