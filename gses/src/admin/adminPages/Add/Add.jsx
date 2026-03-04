import { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import api from "../../../shared/utils/api";

const Add = () => {
  const url = api();

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Balloons",
    quantity: 0,
  });

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    formData.append("quantity", Number(data.quantity));
    if (!image) {
      toast.error("Please select an image");
      return;
    }
    const response = await axios.post(`${url}/api/design/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.data) {
      console.log("Product added successfully");
      toast.success("Product added successfully");
      setData({
        name: "",
        description: "",
        price: "",
        category: "Electric Irons",
        quantity: 0,
      });
      setImage(false);
      document.getElementById("image").value = "";
      toast.success(response.data.message);
    } else {
      console.log("Failed to add product");
      toast.error("Failed to add product", response.data.message);
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload}
              alt="item image"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            onChange={onchangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here ..."
          />
        </div>
        <div className="add-product-descriptions flex-col">
          <p>Product Description</p>
          <textarea
            onChange={onchangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write contents here ..."
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select
              onChange={onchangeHandler}
              value={data.value}
              name="category"
            >
              <option value="Electric Irons" selected>
                Electric Irons
              </option>
              <option value="Fans">Fans</option>
              <option value="Wall Lights">Wall Lights</option>
              <option value="Chairs">Chairs</option>
              <option value="Electric Cables">Electric Cables</option>
              <option value="Switches">Switches</option>
              <option value="Sockets">Sockets</option>
              <option value="Tools">Tools</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onchangeHandler}
              value={data.price}
              type="number"
              min={5}
              max={20000}
              name="price"
              placeholder="$20"
            />
          </div>
          <div className="add-price flex-col">
            <p>Product Quantity</p>
            <input
              onChange={onchangeHandler}
              value={data.quantity}
              type="number"
              min={0}
              max={30}
              name="quantity"
              placeholder="0"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};
export default Add;
