import React from "react";

const MenuCard = ({ menuItem }) => {
  const { name, description, price } = menuItem;
  return (
    <div className="MenuCard">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};

export default MenuCard;
