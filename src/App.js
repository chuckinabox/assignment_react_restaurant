import React, { Component } from "react";
import NavigationCards from "./NavigationCards";
import MenuCards from "./MenuCards";

import "./App.css";
import image from "./Red-restaurant-background.png";

const navigation = [
  {
    name: "Welcome",
    tag: "#Welcome"
  },
  {
    name: "Menu",
    tag: "#Menu"
  },
  {
    name: "Reservation",
    tag: "#Reservation"
  },
  {
    name: "Address",
    tag: "#Address"
  }
];

const menu = [
  {
    name: "Crab Cake Platter",
    description:
      "Our Very Own Jumbo Lump Crab Cake Broiled Golden Brown. Served with choice of two sides.",
    price: "18.00"
  },
  {
    name: "14oz Rib Eye",
    description:
      "Served with sauteed mushrooms and onions, also wiht choice of two sides.",
    price: "20.00"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header col-sm-12">
          <img src={image} className="App-logo" alt="logo" />
          <NavigationCards navigation={navigation} />
        </header>
        <h2 id="Welcome">Welcome</h2>
        <h2 id="Menu">Menu</h2>
        <MenuCards menu={menu} />
        <h2 id="Reservation">Reservation Form</h2>
        <input type="text" placeholder="name" />
        <input type="date" placeholder="date" />
        <input type="time" placeholder="time" />
        <h2 id="Address">Address</h2>
        <a href="https://maps.google.com/?q=123 Fake St, Chicago, Illinois, 60652">
          <address>
            123 Fake St.<br />
            Chicago, Il 60652
          </address>
        </a>
      </div>
    );
  }
}

export default App;
