import {useState, useEffect } from "react";
import { ResturantMenu_URL } from "../utilis/contants";



const useResturantMenu = (resId) => {
  const [menuResData, setMenuResData] = useState(null)

    //fetch the data

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(ResturantMenu_URL + resId)
        const json = await data.json()
        setMenuResData(json.data.cards[2].card.card.info)
        console.log(json.data.cards[2].card.card.info)
    }

    return menuResData;
}


export default useResturantMenu;