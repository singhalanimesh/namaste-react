import { useDispatch, useSelector } from "react-redux";

import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const clear = () => {
    dispatch(clearCart());
  };

  console.log(cartItems);

  return (
    <div className="pt-36 bg-[#ffffee] h-screen">
        <div className="text-center p-4 w-8/12 m-auto">
      <div className="flex justify-between">
        <p className="text-3xl font-bold">Cart</p>
        <button className="py-1 px-4 rounded-lg text-xl bg-slate-800 text-[#ffffee] hover:text-[#ffa500]" onClick={clear}>Clear Cart</button>
      </div>
      <div className="">
        {cartItems.length === 0 && (<p className="font-semibold text-lg my-8">Cart is Empty!! Please Add Items for Checkout!</p>)}
        <ItemList items={cartItems} />
      </div>
    </div>
    </div>
  );
};
export default Cart;
