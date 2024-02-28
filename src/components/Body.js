import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const [searchText, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.632668364482797&lng=88.4359834715724&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    const data = await fetch(
      "https://corsproxy.org/?" +
        encodeURIComponent(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.632668364482797&lng=88.4359834715724&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
