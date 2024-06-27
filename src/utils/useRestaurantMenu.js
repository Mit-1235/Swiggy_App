import { useState, useEffect } from "react";
import { MENU_ITEM } from "../utils/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            MENU_ITEM + resId
            // MENU_ITEM + resId + "&catalog_qa=undefined&submitAction=ENTER"
        )
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestaurantMenu;