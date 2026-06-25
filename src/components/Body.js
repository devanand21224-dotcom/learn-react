import RestaurantCard, { withVegLabelCard } from "./ResturantCard";
import restaurantData from "../utilis/mockData";
import { useState, useEffect , useContext} from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import UserContext from "../utilis/UserContext";

const Body = () => {
  //local superpowerful state variable;

  // console.log(ShimmerUi, "sshhi");

  const [resData, setResData] = useState([]);
  const [serachText, setSearchText] = useState("");
  const [filterResData, setFilterResData] = useState([])

  const RestaurantVegCard = withVegLabelCard(RestaurantCard)

  console.log(RestaurantVegCard, "RestaurantVegCard")

  //whenever state variable update, react triggers a reconcilliation cycle(rerenders)
  console.log("body rerenders");


  const {loggedInUser, setUserName} = useContext(UserContext)

  console.log(loggedInUser, 'data')

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
  //     image:restaurant?.info.id
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


  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    // console.log(json);
    // setResData(json);
    setResData(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    setFilterResData(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants)


  };

  useEffect(() => {
    // console.log("useEffect called");
    fetchData();
  }, []);


  // console.log(resData, "resdata");

  if (resData.length === 0) {
    return (
      <>
        <ShimmerUi />
      </>
    );
  }
  console.log(resData, "resdata")

  return (
    <>
      <div>
        <input
          type="text"
          value={serachText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // filter the resturant card and update the ui
            console.log(serachText);

            const filterResturant = resData.filter((res) => res.info.name.toLowerCase().includes(serachText.toLowerCase()))
            setFilterResData(filterResturant)
          }}
        >
          Search
        </button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredData = resData.filter(
            (res) => parseFloat(res?.info?.avgRatingString) > 4.5,
          );
          setFilterResData(filteredData)
        }}
      >
        Top Rated Restaurants
      </button>

      <div className="mt-3 ml-2">
        <input value={loggedInUser} onChange={(e) => setUserName(e.target.value)} className="border  border-black pl-2" />
      </div>


      <div className="cardContainer">
        {filterResData.map((restaurant) => (
          <Link to={"/resturants/" + restaurant?.info.id} key={restaurant?.info.id}>

            {/* if the restaurant is veg then add a beg label to it */}
            {
              restaurant?.info?.veg ? <RestaurantVegCard resData={restaurant?.info} /> : <RestaurantCard
                resData={restaurant?.info}
              />
            }


          </Link>


        ))}
      </div>
    </>
  );
};

export default Body;
