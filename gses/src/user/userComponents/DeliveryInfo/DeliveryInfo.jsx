import React from "react";
import "./DeliveryInfo.css";
import { Link } from "react-router-dom";

const DeliveryInfo = () => {
  return (
    <div className="deliveryInfo">
      <h1>Delivery Information</h1>
      <div className="info">
        At <b>Balloon & Floral Decoration</b>, we strive to provide exceptional
        service, ensuring timely and delicate delivery of our beautiful balloons
        and flowers. Delivery Options Standard Delivery: Orders placed by 4:30pm
        are delivered within 8am - 4:30pm on business days. Express Delivery:
        Urgent orders are delivered within 1-3 hours for an additional fee.
        Scheduled Delivery: Choose a specific delivery time for special
        occasions. Delivery Areas We proudly serve <br />{" "}
        <i>
          Accra, Greater Region
          <br />
          Anloga, Volta Region <br />
          Sekondi, Western Region <br />
          etc.
        </i>
        , with plans to expand our delivery areas. Order Tracking Receive timely
        updates via email, SMS or our mobile app. Track your order from
        preparation to delivery. Packaging and Handling Balloons: Securely tied
        and transported in specialized vehicles. Flowers: Carefully arranged,
        wrapped and hydrated for optimal freshness. Delivery Fees <br />
        Standard: [$2] <br />
        Express: [$10] <br />
        Scheduled: [$15] <br />
        Special Instructions Provide clear instructions for delivery to
        apartments, offices or gated communities. Specify dedicated delivery
        recipients. Contact Us For delivery concerns, call <i>0246062758</i>,
        email <i>jdeku573@gmail.com</i> or chat with our support team. Business
        Hours
        <b> 9:00 AM - 5:00 PM ET, Monday - Friday </b>
        Refund and Cancellation Policy View our refund and cancellation policy{" "}
        <a href="">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </a>
        . Your satisfaction is our priority.
      </div>
    </div>
  );
};

export default DeliveryInfo;
