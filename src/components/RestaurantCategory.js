import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({
  data,
  showItems,
  setShowItems,
  setCloseItems,
}) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    if (count % 2 == 0) setShowItems();
    else setCloseItems();
  };

  return (
    <div className="my-4 bg-gray-50 shadow-lg p-4 rounded-lg">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-xl font- font-bold">
          {data.title} ({data.itemCards.length}){" "}
        </span>
        <span className="text-2xl">⬇️</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
