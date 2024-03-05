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
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            className="search-btn"
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
        <div className="filterbtn">
          <button className="filter-btn" onClick={() => filter()}>
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
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
