import React, { useEffect, useState } from "react";
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
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication code
  useEffect(() => {
    const data = {
      name: "muzami hussain"
    };
    setUserName(data.name);
  },[])
  return (
    <UserContext.Provider value = {{loggedInUser: userName, setUserName}}>
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
  );
};

//chunking
//code splitting
//Dynamic Bundling
//Lazy loading or on demand loading

// const Grocerry = lazy(() => {
//   import("./components/Grocerry");
// });
const Grocerry = React.lazy(() => import("./components/Grocerry"));


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
        element: <About name = {"muzamil"} />,
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
