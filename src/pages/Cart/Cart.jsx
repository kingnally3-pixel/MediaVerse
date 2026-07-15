import MainLayout from "../../layouts/MainLayout";
import Container from "../../components/ui/Container";
import { useApp } from "../../context/AppContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useApp();

  return (
    <MainLayout>
      <Container>
        <h1 className="my-10 text-5xl font-black">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="mb-5 flex items-center justify-between rounded-2xl bg-slate-800 p-5"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-16 rounded object-cover"
                  />

                  <div>
                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="text-gray-400">
                      {item.category}
                    </p>

                    <p className="mt-2">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="rounded bg-slate-700 px-3 py-1"
                  >
                    −
                  </button>

                  <span className="text-lg font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="rounded bg-slate-700 px-3 py-1"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-6 rounded bg-red-600 px-4 py-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="mt-10 rounded-2xl bg-slate-900 p-8">
              <h2 className="mb-3 text-2xl font-bold">
                Order Summary
              </h2>

              <div className="flex justify-between">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="mt-3 flex justify-between text-2xl font-bold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button className="mt-8 w-full rounded-xl bg-cyan-500 py-4 font-bold hover:bg-cyan-400">
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="mt-3 w-full rounded-xl bg-red-600 py-4"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </Container>
    </MainLayout>
  );
}