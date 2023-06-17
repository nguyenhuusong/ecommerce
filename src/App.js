import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage, { loader as HomeLoader } from "./pages/HomePage";

import Root from "./pages/Root";
import ShopPage from "./pages/ShopPage";
import { loader as productLoader } from "./pages/Root";
import DetailPage from "./pages/DetailPage";
import SProduct from "./component/shop/SProduct";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import { action as LoginAction } from "./component/Login";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fretchCart } from "./store/cart-action";
import CheckoutPage from "./pages/CheckoutPage";

const r = document.querySelector(":root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: "product-loader",
    loader: productLoader,
    children: [
      { index: true, element: <Homepage />, loader: HomeLoader },
      {
        path: "shop",
        element: <ShopPage />,
        children: [
          { index: true, element: <SProduct /> },
          {
            path: ":type",
            element: <SProduct />,
          },
        ],
      },

      { path: "detail/:productId", element: <DetailPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "auth", element: <LoginPage />, action: LoginAction },
      { path: "/checkout", element: <CheckoutPage /> },
    ],
  },
]);

let inil = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fretchCart());
  }, [dispatch]);
  useEffect(() => {
    if (inil) {
      inil = false;
      return;
    }
    if (!cart.initial) {
      console.log("send");
      localStorage.setItem(
        "cart",
        JSON.stringify({ cart: cart.cart, totalPrice: cart.totalPrice })
      );
    }
  }, [cart, dispatch]);

  function setCssVar(value) {
    r.style.setProperty("--view-height", value);
  }
  window.addEventListener("resize", function () {
    const h = window.innerHeight;
    setCssVar(`${h}px`);
  });
  useEffect(() => {
    const h = window.innerHeight;
    setCssVar(`${h}px`);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
