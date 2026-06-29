// const heading =  React.createElement("h1", {id:"heading"}, "hello world from react");
// console.log(heading) ///obj
// const root  = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//ReactElement (obj)  =======> html(browserunderstand)

// <div id="parent">
//     <div id="child">
//         <h1>I am h1 tag</h1>
// <h2>I am h2 tag</h2>
//     </div>
//  <div id="child2">
//       <h1>I am h1 tag</h1>
//         <h2>I am h2 tag</h2>
//  </div>
// </div>

// import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorComp from "./components/ErrorComp";
import ResturantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utilis/UserContext";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child", key: "child1" }, [
//     React.createElement("h1", { key: "h1" }, "I am h1 tag"),
//     React.createElement("h2", { key: "h2" }, "I am h2 tag"),
//   ]),
//   React.createElement("div", { id: "child2", key: "child2" }, [
//     React.createElement("h1", { key: "h3" }, "I am h1 tag"),
//     React.createElement("h2", { key: "h4" }, "I am h2 tag"),
//   ]),
// ]);

// console.log(parent);
//jsx(transpiled before it reaches the js engine)==>  parcel ===> babel

//jsx===>React.createElement ====> React Element===> js object===> Html elemnt(render)
// const JsxHeading = (
//   <div id="parent">
//     <div id="child1" key="child1">
//       <h1 key="h1">I am h1 tag</h1>
//       <h2 key="h2">I am h2 tag</h2>
//     </div>

//     <div id="child2" key="child2">
//       <h1 key="h3">I am h1 tag</h1>
//       <h2 key="h4">I am h2 tag</h2>
//     </div>
//   </div>
// );

//React Components

// const HeadingComponent = () => {
//   return <h1>My name is functional component</h1>;
// };

// App.js

//Chunking
//CODE SPILLITING
//Dynamic bundling
//Lazy laoding
//On  demnad loading

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayoutComponent = () => {

  const [userName, setUserName] = useState("");


  useEffect(() => {
    // API CALL

    const data = {
      name: "ANAND"
    }

    setUserName(data.name)


  }, [])


  return (
    <div>
      <Provider store={appStore}>
        <UserContext.Provider
          value={{
            loggedInUser: userName, setUserName
          }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};


const appRouter = createBrowserRouter([

  {
    path: '/',
    element: <AppLayoutComponent />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>I am loading.....</h1>}><Grocery /></Suspense>
      },
      {
        path: '/resturants/:resId',
        element: <ResturantMenu />
      }
    ],
    errorElement: <ErrorComp />
  },


])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
