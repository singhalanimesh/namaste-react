import { useContext, useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import RestaurantCard, { flatRestaurantCard } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { BODY_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
// import useBody from "../utils/useBody";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const [count, setCount] = useState(0);

  const { LoggedInUser } = useContext(UserContext);
  const { setUserName } = useContext(UserContext);

  const RestaurantCardFlat = flatRestaurantCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BODY_URL);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like You are Offline!! Please Check Your Internet Connection
      </h1>
    );

  // const listOfRestaurants = useBody();
  // const [filteredRes, setFilteredRes] = useState([]);
  // const [searchText, setSearchtext] = useState("");
  // setFilteredRes(listOfRestaurants);
  // console.log(listOfRestaurants);

  const topRated = () => {
    if (count % 2 == 0) {
      const filteredList = filteredRes.filter(
        (restaurant) => restaurant.info.avgRating >= 4.2
      );
      setFilteredRes(filteredList);
    } else {
      setFilteredRes(listOfRestaurants);
    }
    setCount(count + 1);
  };

  return !listOfRestaurants || listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-[#ffffee]">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="bg-[#FFFFF4] border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            className="search-btn px-6 py-0.5 bg-green-100 ml-4 rounded-md  hover:bg-green-300"
            onClick={() => {
              const searchRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(searchRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
            className="px-4 py-0.5 bg-[#f0f0f0] rounded-md  hover:bg-gray-300"
            onClick={() => topRated()}
          >
            Top rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4">
          <input
            className="border"
            value={LoggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3?.discountTag ? (
              <RestaurantCardFlat resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
