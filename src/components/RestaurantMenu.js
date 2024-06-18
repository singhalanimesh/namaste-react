import { useState } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(null);

  const { resId } = useParams();
  resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[5]?.card?.card;

  const { isPureVeg } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[0]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="pt-36 h-screen">
      <div className="w-7/12 p-8 text-left m-auto">
        <p className="text-2xl font-bold mb-2">{name}</p>
        <p className="text-lg text-green-600 mb-1">
          {isPureVeg ? "🟩 Pure Veg" : ""}
        </p>
        <p className="text-lg mb-1">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <p className="text-lg mb-8">{areaName}</p>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showItems}
            setShowItems={() => setShowItems(index)}
            setCloseItems={() => setShowItems(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
