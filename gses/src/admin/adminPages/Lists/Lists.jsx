import React, { useEffect, useState } from "react";
import "./Lists.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import api from "../../../shared/utils/api";

const Lists = () => {
  const [list, setList] = useState([]);

  const url = api();

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/design/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeDesign = async (designId) => {
    const response = await axios.post(`${url}/api/design/remove`, {
      id: designId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  const updateQty = async (designId, newQty) => {
    const response = await axios.post(`${url}/api/design/update-quantity`, {
      id: designId,
      quantity: newQty,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Food Lists</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Quantity</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="item image" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p>
                <button
                  style={{
                    margin: 10,
                    padding: "2px 8px",
                    outline: "none",
                    border: "none",
                    borderRadius: "20px",
                    color: "white",
                    fontSize: "16px",
                    backgroundColor: "#dc3545",
                  }}
                  onClick={() => updateQty(item._id, item.quantity - 1)}
                >
                  -
                </button>
                {item.quantity}
                <button
                  style={{
                    margin: 10,
                    padding: "2px 8px",
                    border: "none",
                    borderRadius: "20px",
                    fontSize: "16px",
                    color: "white",
                    backgroundColor: "green",
                  }}
                  onClick={() => updateQty(item._id, item.quantity + 1)}
                >
                  +
                </button>
              </p>
              <p onClick={() => removeDesign(item._id)} className="cursor">
                <img src={assets.trash} alt="" />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lists;
