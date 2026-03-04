import React from "react";
import PropTypes from "prop-types";
import "./ExploreMenu.css";
import { menu_lists } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Our Services</h1>
      <p className="explore-menu-text">
        Lighting and solutions for weddings, events and special occasions
      </p>
      <div className="explore-menu-list">
        {menu_lists.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu;
