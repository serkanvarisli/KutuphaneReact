import React, { useState } from "react";
import "./App.css";
import Data from "./Data.json";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showClear, setShowClear] = useState(false);
  function handleClear() {
    setSearchTerm("");
    setShowClear(false);
  }
  function handleSearch(event) {
    setSearchTerm(event.target.value);
    setShowClear(event.target.value.length > 0);
  }

  return (
    <div className="maincontainer">
      <h1>KÜTÜPHANEM</h1>
      <div className="inputContainer">
        <input
          className="search"
          id="search-box"
          type="text"
          placeholder="Kitap veya Yazar Ara..."
          onChange={handleSearch}
          //clear input
          value={searchTerm}
        />
        {showClear && (
          <button className="clear" onClick={handleClear}>
            Temizle
          </button>
        )}
      </div>
      <div className="dataContainer">
        {Data.filter((val) => {
          if (searchTerm == "") {
            return val;
          } else if (
            val.title
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          } else if (
            val.author
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
          ) {
            return val;
          }
        }).map((val) => {
          return (
            <div className="data" key={val.id}>
              <img src={val.image} alt="" />
              <h3>{val.title}</h3>
              <b>{val.author}</b>
              <p>{val.Description}</p>
            </div>
          );
        })}
      </div>

      <br />
      <br />
      <br />
      <div className="footer">
        <p>© Copyright 2023 Serkan Varışlı</p>
      </div>
    </div>
  );
}

export default App;
