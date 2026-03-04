import React from "react";
import "./PrivacyPolicy.css";
import { Link } from "react-router-dom";
import { FaInfo } from "react-icons/fa";

const Privacy_Policy = () => {
  return (
    <div className="policy">
      <p>
        <u>
          <strong>Privacy Policy & Cookie Acceptance</strong>
          <br />
          <br />
        </u>
        At Balloon & Floral Decor, your privacy is our top priority. We value
        the trust you place in us to handle your personal information
        responsibly, whether you're browsing for floral arrangements, balloon
        designs, or making an inquiry. We use cookies to enhance your experience
        and ensure our website runs smoothly. Cookies help us remember your
        preferences and provide personalized content to make your visit as
        seamless as possible. Rest assured, any data collected is used only to
        improve your browsing experience, offer tailored suggestions, and help
        us serve you better. By continuing to explore our site, you consent to
        the use of cookies and agree to our privacy policy, ensuring your data
        is secure and treated with utmost care. For more details, feel free to
        review our full privacy policy <Link to="/newsFeed">NEWS FEED</Link> or
        manage your cookie preferences anytime.{" "}
        <FaInfo
          color={"deepskyblue"}
          cursor={"pointer"}
          title="Privacy Policy Info"
        />
      </p>
    </div>
  );
};

export default Privacy_Policy;
