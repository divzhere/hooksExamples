import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import UseState from "./useState";
import UseEffect from "./useEffect";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <UseState /> */}
    <UseEffect />
  </StrictMode>,
  rootElement
);
