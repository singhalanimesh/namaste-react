import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { BODY_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useBody from "../utils/useBody";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BODY_URL);

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(listOfRestaurants);
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

  const filter = () => {
    const filteredList = filteredRes.filter(
      (restaurant) => restaurant.info.avgRating >= 4.0
    );
    setFilteredRes(filteredList);
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
          <button className="px-4 py-0.5 bg-[#f0f0f0] rounded-md  hover:bg-gray-300" onClick={() => filter()}>
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
