import { useDispatch, useSelector } from "react-redux";
import RestaurantCategoryItems from "./RestaurantCategoryItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  //in this we are subscribing to portion of store cart slice only
  const cartItems = useSelector((store) => store.cart.items);


  //less efficient because we are subscribing to whole store
  // const store = useSelector((store) => store);
  // const cartItems = store.cart.items;

  const dispatch = useDispatch();
  const handleClearcart = () => {
    console.log("clicked");
    dispatch(clearCart());
  };
  return (
    <div className="w-9/12 m-auto mt-8">
      <h2 className="text-center text-xl font-bold ">Cart</h2>
      <div className="">
        <button
          className="bg-black text-white p-2 w-24 rounded-lg m-auto" onClick={handleClearcart}>
          Clear Cart
        </button>
        {cartItems.length == 0 && <p>your cart is empty please add items to the cart</p>}
        {/* <RestaurantCategoryItems items={cartItems} /> */}
      </div>
    </div>
  );
};
export default Cart;
