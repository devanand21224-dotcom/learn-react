import RestaurantCard from "./ResturantCard";
import restaurantData from "../utilis/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  //local superpowerful state variable;

  const [resData, setResData] = useState(restaurantData);

  //noraml js varibale
  // let restaurantData = [];

  //normal js variable
  // let restaurantData = [
  //   {
  //     id: 1,
  //     name: "Burger King",
  //     cuisine: "Burgers, Fast Food",
  //     rating: "4.3 ⭐",
  //     deliveryTime: "25 mins",
  //     image:
  //       "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800",
  //   },
  //   {
  //     id: 2,
  //     name: "Pizza Hut",
  //     cuisine: "Pizza, Italian",
  //     rating: "3.8 ⭐",
  //     deliveryTime: "30 mins",
  //     image:
  //       "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800",
  //   },
  // ];

  useEffect(() => {
    console.log("useEffect called");
    fetchData()
  }, []);

  const fetchData = () =>{
    
  }

  console.log("body rendered");

  return (
    <>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredData = resData.filter(
            (res) => parseFloat(res.rating) > 4,
          );
          setResData(filteredData);
          console.log(restaurantData, "sssssss");
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="cardContainer">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
