import { useDispatch } from "react-redux"
import { addItem } from "../utilis/cartSlice";


const ItemList = ({ data }) => {
    console.log(data, "items")

    const dispatch = useDispatch();

    const handleAdditem = () => {
        //dispatch an action
        dispatch(addItem("pizaa"))


    }

        

    return (
        <div className="border-b-1 border-gray-100 shadow-xs p-2 rounded-4">
            {data.map((item, index) => {
                return (
                    <div className="mb-2 flex justify-between " key={index}>
                        <div className="w-10/12s" >
                            <h2  >{item?.card?.info?.name}- {
                                item?.card?.info?.price / 100
                            }
                            </h2>

                            <p>
                                <span className="font-bold">
                                    Description -
                                </span>
                                {" "}

                                <span className="text-xs">
                                    {item?.card?.info?.description}
                                </span>
                            </p>



                        </div>
                        <div className="w-2/12 flex justify-end">
                            <button 
                                //   onClick={handleAdditem} 
                                  onClick = {() => handleAdditem(item)}
                                //   onClick = {handleAdditem(item)}
                                  
                                  
                                  className="border-orange-400 border rounded-[4px]  text-[12px] p-2 ">
                                + Add
                            </button>
                        </div>

                    </div>
                )
            })
            }
        </div>
    )
}

export default ItemList;