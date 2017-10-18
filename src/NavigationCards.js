import React from "react";
import NavCard from "./NavCard";

const NavigationCards = ({ navigation }) => {
  const cards = navigation.map(navTag => (
    <NavCard navTag={navTag} key={navTag.tag} />
  ));

  return <ul className="NavigationCards nav nav-pills">{cards}</ul>;
};

export default NavigationCards;
