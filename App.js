import React from "react";
import ReactDOM from "react-dom/client";

const JsxHead = () => (
  <h1 className="First" id="Head" taxindex="5">
    My New JSX script
  </h1>
);

const HeadingComponent = () => (
  <div>
    <h1 className="Second">New Component script</h1>
    {<JsxHead/>}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
