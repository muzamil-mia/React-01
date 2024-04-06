import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Cntact";
import Error from "./components/Error";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import Grocerry from "./components/Grocerry";
import RestaurantMenu from "./components/RestaurantMenu";
// const Grocerry = lazy(() => {
//   import("./components/Grocerry");
// });
const Grocerry = React.lazy(() => import("./components/Grocerry"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

//chunking
//code splitting
//Dynamic Bundling
//Lazy loading or on demand loading



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocerry",
        element: <Suspense fallback={<h1>Loading....</h1>}>
          <Grocerry/>
        </Suspense>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },

  // {
  //   path: "/contact",
  //   element: <Contact/>,
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
