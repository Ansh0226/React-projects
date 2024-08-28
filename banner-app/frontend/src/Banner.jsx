import React, { useState, useEffect } from "react";
import { getBannerData } from "./api";

const Banner = () => {
  const [banner, setBanner] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBannerData();
      setBanner(response.data);
      setTimeLeft(response.data.timer);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  if (!banner.isVisible || timeLeft <= 0) return null;

  return (
    <div className="banner">
      <p>{banner.description}</p>
      <p>Time left: {timeLeft} seconds</p>
      {banner.link && <a href={banner.link}>Click Here</a>}
    </div>
  );
};

export default Banner;
