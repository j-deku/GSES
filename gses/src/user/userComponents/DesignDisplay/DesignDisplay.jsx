import { useContext } from "react";
import PropTypes from "prop-types";
import "./DesignDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import DesignItem from "../DesignItem/DesignItem";

const DesignDisplay = ({ category }) => {
  const { decor_lists, searchTerm } = useContext(StoreContext);

  if (!decor_lists) {
    return <p style={{ margin: 50, fontSize: 18 }}>Loading items...</p>;
  }

  const filteredDesigns = decor_lists.filter(
    (item) =>
      (category === "All" || category === item.category) &&
      (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <div className="design-display" id="design-display">
      <h2>Featured Products</h2>
      <p>Popular wedding lights and electrical gadgets</p>

      <div className="design-display-list">
        {filteredDesigns.length > 0 ? (
          filteredDesigns.map((item) => (
            <DesignItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
            />
          ))
        ) : (
          <p className="error-message">
            Oops! ... <br /> No Items found for &quot;{searchTerm}&quot; at this
            time❗
          </p>
        )}
      </div>
    </div>
  );
};
DesignDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default DesignDisplay;
