import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResizableDivs from "./ResizableDivs";
import { countURL } from "./helpers/urls";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    // Make API call for counting
    fetch(countURL, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("text").innerHTML =
          "Total Add and Update API count is " + data.count;
      });
  };

  return (
    <>
      <div>
        <ResizableDivs />
      </div>
      <p className="read-the-docs">
        <button
          onClick={handleCount}
          style={{ border: "3px solid lightgreen" }}
        >
          Count
        </button>
      </p>
      <p id="text"></p>
    </>
  );
}

export default App;
