import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router";
import useResturantMenus from "../utilis/useResturantMenu";
import useOnlineStatus from "../utilis/useOnlineStatus";


const ResturantMenu = () => {



    const { resId } = useParams();
    const OnlineStatus = useOnlineStatus()

    const menuResData = useResturantMenus(resId)
    console.log(resId, 'parms')


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

    if (OnlineStatus === false) return <h1>No internet connection</h1>

    return (
        menuResData === null ? <ShimmerUi /> : (<div className="menu">
            <h2>{menuResData.name}</h2>
            <h3>Menu</h3>
            {
                menuResData.cuisines.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }


        </div>)
    )



}

export default ResturantMenu;