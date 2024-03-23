import React, { useState } from "react";
import { Resizable } from "react-resizable";
import "./ResizableDivs.css"; // CSS for styling
import { addURL, updateURL } from "./helpers/urls";
import { getFormBody } from "./helpers/utils";

const ResizableDivs = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  const handleAdd = (setText, component) => {
    setText("");
    // Make API call for adding
    fetch(addURL + `/${component}`, {
      method: "POST",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {});
  };

  const handleUpdate = (component, description) => {
    // Make API call for updating
    fetch(updateURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ component, description }),
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => {});
  };

  return (
    <div className="resizable-divs-container">
      <div className="row">
        <Resizable
          className="resizable-div resizable-div-1"
          height={window.innerHeight * 0.45}
          width={window.innerWidth * 0.5}
        >
          <div className="content" style={{ height: "45vh", width: "50vw" }}>
            <textarea
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="Type here..."
              style={{ height: "50%", width: "50%" }}
            />
            <div className="buttons">
              <button onClick={() => handleAdd(setText1, 1)}>Add</button>
              <button onClick={() => handleUpdate(1, text1)}>Update</button>
            </div>
          </div>
        </Resizable>
        <Resizable
          className="resizable-div resizable-div-2"
          height={window.innerHeight * 0.45}
          width={window.innerWidth * 0.5}
        >
          <div className="content" style={{ height: "45vh", width: "50vw" }}>
            <textarea
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="Type here..."
              style={{ height: "50%", width: "50%" }}
            />
            <div className="buttons">
              <button onClick={() => handleAdd(setText2, 2)}>Add</button>
              <button onClick={() => handleUpdate(2, text2)}>Update</button>
            </div>
          </div>
        </Resizable>
      </div>
      <div className="row">
        <Resizable
          className="resizable-div resizable-div-3"
          height={window.innerHeight * 0.45}
          width={window.innerWidth}
        >
          <div
            className="content"
            style={{
              height: "45vh",
              width: "100vw",
              backgroundColor: "rgba(0, 0, 255, 0.2)",
            }}
          >
            <textarea
              value={text3}
              onChange={(e) => setText3(e.target.value)}
              placeholder="Type here..."
              style={{ height: "50%", width: "50%" }}
            />
            <div className="buttons">
              <button onClick={() => handleAdd(setText3, 3)}>Add</button>
              <button onClick={() => handleUpdate(3, text3)}>Update</button>
            </div>
          </div>
        </Resizable>
      </div>
    </div>
  );
};

export default ResizableDivs;
