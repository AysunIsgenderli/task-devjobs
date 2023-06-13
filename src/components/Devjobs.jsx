import React, { useState } from "react";

import Filters from "../Filters";
import data from "../data.json";
import { Link } from "react-router-dom";
import '../App.css'

function Devjobs() {
  const [index, setIndex] = useState(12);

  function loadMore(event) {
    event.preventDefault();
    setIndex(index + 12);
  }

  function cardDetailsHandler(id){

  }

  return (
    <>
      <Filters />
      <div className="container">
        <div className="cards">
          {data &&
            data.slice(0, index).map((card) => {
              return (
                <Link className="card" key={card.id} to= {`/${card.id}`} >
                  <div className="logo">
                    <img src={card.img} />
                  </div>
                  <div className="date">
                    {" "}
                    <span className="activeTime">{card.activeTime}</span>.{" "}
                    {card.workTime}{" "}
                  </div>
                  <p className="position">{card.position}</p>
                  <span className="company">{card.company}</span>
                  <div className="country">{card.country}</div>
                </Link>
              );
            })}
        </div>
        <div className="loadButton">
          {" "}
          <button onClick={(e) => loadMore(e)}>Load more</button>
        </div>
      </div>
    </>
  );
}

export default Devjobs;
