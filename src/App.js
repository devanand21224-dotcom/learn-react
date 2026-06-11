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

const AppLayoutComponent = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
