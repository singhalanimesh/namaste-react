import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, areaName} =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[5]?.card?.card;

  return (
    <div className="bg-[#ffffee] p-8">
      <p className="text-4xl font-semibold mb-2">{name}</p>
      <p className="text-lg mb-1">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p className="mb-8">{areaName}</p>
      <p className="text-2xl font-semibold mb-4">Menu</p>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {(item.card.info.price
              ? item.card.info.price
              : item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
