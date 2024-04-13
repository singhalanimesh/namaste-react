import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="px-2 pb-8 m-2 text-left border-b-2 flex justify-between"
        >
          <div className="py-2 w-8/12">
            <div className="font-semibold pb-2">
              <p className="text-lg">{item?.card?.info?.name}</p>
              <p>₹{item?.card?.info?.price / 100}</p>
            </div>
            <div>
              <p className="text-s">{item?.card?.info?.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4">
            <div className=" absolute">
              <button className=" text-lg font-bold p-2 rounded-lg bg-white shadow-lg text-green-500">
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
