import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

// import StarRating from "./StarRating";
// function Test() {
//   const [moviestar, setMovieStar] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieStar} />
//       <p>This movie was rated {moviestar} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={10}
      color="red"
      size={24}
      className="test"
      defaultRating={5}
    />
    <Test /> */}
  </React.StrictMode>
);
