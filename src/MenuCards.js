import React from "react";
import MenuItemCard from "./MenuItemCard";

const MenuCards = ({ menu }) => {
  const cards = menu.map(menuItem => (
    <MenuItemCard menuItem={menuItem} key={menuItem.tag} />
  ));

  return <div className="MenuCards">{cards}</div>;
};

export default MenuCards;
