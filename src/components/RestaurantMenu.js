import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";
import useResturantMenus from "../utilis/useResturantMenu";
import useOnlineStatus from "../utilis/useOnlineStatus";
import RestaurantCatgory from "./RestaurantCatgory";


const ResturantMenu = () => {
    const { resId } = useParams();
    const OnlineStatus = useOnlineStatus()
    const menuResData = useResturantMenus(resId)
    const [showIndex, setShowIndex] = useState(0)



    // useEffect(() => {
    //     fetchMenu()
    // },
    //     [])


    // const fetchMenu = async () => {
    //     const data = await fetch(ResturantMenu_URL + resId)
    //     const json = await data.json()
    //     setMenuResData(json.data.cards[2].card.card.info)
    //     console.log(json.data.cards[2].card.card.info)
    // }

    const resturantInfo = menuResData?.[2]?.card?.card?.info


    const recommendedItems = menuResData?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(recommendedItems, "rcitem")

    if (OnlineStatus === false) return <h1>No internet connection</h1>

    return (
        <div className="w-full flex justify-center p-4">
            {

                !menuResData ? (
                    <ShimmerUi />
                ) : (
                    <div className="max-w-[1000px] mx-auto mt-8 p-[20px] bg-white rounded-2xl shadow-lg w-full">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                            {resturantInfo?.name}
                        </h2>

                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-lg">
                                ⭐ <span>{resturantInfo?.avgRating}</span>
                            </div>

                            <div className="flex items-center gap-1 text-gray-700">
                                💰 <span>{resturantInfo?.costForTwo}</span>
                            </div>

                            <div className="flex items-center gap-1 text-gray-700">
                                📍 <span>{resturantInfo?.locality}</span>
                            </div>
                        </div>

                        <p className="text-gray-500 mb-6">
                            Delicious food prepared with love ❤️
                        </p>

                        <div className="border-t pt-6">
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">
                                🍽️ Cuisines
                            </h3>

                            <div className="flex flex-wrap gap-3 justify-center">
                                {resturantInfo?.cuisines?.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium hover:scale-105 transition-transform duration-200 cursor-pointer"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* ====category Accordian============= */}

                         {/* controlled components */}

                        {
                            recommendedItems.map((cat, index) => 
                               <RestaurantCatgory data={cat?.card?.card} 
                                  key={index} 
                                  showIndex={index === showIndex ? true : false} 
                                  setShowIndex={()=> setShowIndex(index)}
                                  />)
                        }
                    </div>
                )
            }

        </div>


    )



}

export default ResturantMenu;