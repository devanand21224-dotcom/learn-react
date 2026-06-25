import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCatgory = (props) => {
    console.log(props, "props")
    const { data, showIndex, setShowIndex } = props

    // const [showList, setShowList]  = useState(false)


    const handleClick = () => {
        //    setShowList(!showList)
        setShowIndex()
    }


    return (
        <div className="w-full mt-4 ">
            <h2 role="button" onClick={handleClick} className="w-full cursor-pointer flex justify-between bg-gray-100 mb-10 p-4 rounded-[10px] shadow-lg">
                <span className="font-[600]">
                    {
                        data.title

                    }
                    {
                        " "
                    }
                    ( {
                        data?.itemCards?.length
                    } )
                </span>
                <span>
                    ⬇️
                </span>
            </h2>
            {/*======Header=============*/}
            {/* Rescategory */}


            {/* ============Accordian body====== */}

            {
                showIndex && <ItemList data={data.itemCards} />
            }



        </div>
    )
}

export default RestaurantCatgory;