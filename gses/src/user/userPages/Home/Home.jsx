import { useEffect, useState } from "react";
import "./Home.css";
import ExploreMenu from "../../userComponents/ExploreMenu/ExploreMenu";
import DesignDisplay from "../../userComponents/DesignDisplay/DesignDisplay";
import AppDownload from "../../userComponents/AppDownload/AppDownload";
import { toast } from "react-toastify";
import Bot from "../../userComponents/Bot/Bot";
import Header from "../../usercomponents/Header/Header";
import WhyChooseUs from "../../userComponents/WhyChooseUs/WhyChooseUs";
import GalleryPreview from "../../userComponents/GalleryPreview/GalleryPreview";
const Home = () => {
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const handleVerified = (event) => {
      if (event.data?.verified) {
        toast.success("User Verified Successfully. Redirecting ...");

        window.location.href = "/";
      }
    };
    window.addEventListener("message", handleVerified, false);
    return () => window.removeEventListener("message", handleVerified, false);
  }, []);

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <DesignDisplay category={category} />
      <WhyChooseUs />
      <Bot />
      <GalleryPreview />
      <AppDownload />
    </div>
  );
};

export default Home;
