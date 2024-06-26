import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    sla,
    areaName,
  } = resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="res-card m-4 p-4 w-[250px] h-[420px] rounded-lg bg-[#f0f0f0] hover:bg-gray-300">
      <div className="rounded-md overflow-hidden">
        <img
          className="res-logo w-[218px] h-[145px] object-center"
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
      </div>
      <h3 className="text-xl font-bold py-4">{name}</h3>
      <div className="flex pb-2 font-semibold">
        <h4 className="pr-1">⭐ {avgRating} stars •</h4>
        <h4>{sla.slaString}</h4>
      </div>
      <h4 className="pb-1">{cuisines.join(", ")}</h4>
      <p className="pb-1">{areaName}</p>
      <h4>{costForTwo}</h4>
      <p>User: {loggedInUser}</p>
    </div>
  );
};

export const flatRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-700 text-slate-300 mx-4 p-2 rounded-md">
          FLAT DEAL
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
