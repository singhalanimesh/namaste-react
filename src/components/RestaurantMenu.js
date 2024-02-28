import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.org/?" + encodeURIComponent(MENU_API + resId)
    );
    const json = await data.json();

    console.log(json.data);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]?.card?.card;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]?.card?.card
  //     ?.categories[0];
  // console.log(itemCards);

  // const categories =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  //     (c) =>
  //       c.card?.card?.["@type"] ==
  //       "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  //   );

  // BCards = Cards[2]?.card?.card?.categories[0];
  // console.log("hoho" + Cards);

  // console.log(categories);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
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
