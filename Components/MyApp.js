import React from "react";
import ReactDOM from "react-dom";

function MyApp() {
  return (
    <div>
      <h1 className="logo-name">All Around The World: Dessert Bar </h1>
      <h2> Wordly inspired,locally sourced desserts</h2>
      <a class="nav-link" href="#">
        About us
      </a>
      <a class="nav-link" href="#">
        Menu
      </a>
      <a class="nav-link" href="#">
        Order Status
      </a>
      <a class="nav-link" href="#">
        Connect with Us
      </a>
    </div>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
