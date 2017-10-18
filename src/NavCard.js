import React from "react";

const NavCard = ({ navTag }) => {
  const { name, tag } = navTag;
  return (
    <li role="presentation" className="NavCard">
      <a href={tag}>{name}</a>
    </li>
  );
};

export default NavCard;
