import { useContext } from "react";
import { CartContext } from "../contexts/cartProvider";

function Cart() {
  const { cart } = useContext(CartContext);
  console.log("cart product is", cart);

  return (
    cart.length > 0 ? (
      <div className="mx-auto flex flex-col gap-4 items-center justify-center p-4">
        {cart.map((product, index) => (
          <div
            key={index}
            className="w-[80%] flex items-center justify-between gap-2 rounded-xl border border-black bg-white p-4 shadow-md mt-4"
          >
            <img
              src={product.image}
              alt="product"
              className="h-[70px] w-[70px] rounded-xl object-cover"
            />
            <h4 className="font-semibold">Quantity: {product.quantity}</h4>
            <p className="text-sm text-gray-600">Category: {product.category}</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-lg font-medium mt-4">Your Cart is Empty</p>
    )
  );
}

export default Cart;
