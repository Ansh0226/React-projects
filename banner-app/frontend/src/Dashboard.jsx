import React, { useState, useEffect } from "react";
import { getBannerData, updateBannerData } from "./api";

const Dashboard = () => {
  const [banner, setBanner] = useState({
    isVisible: false,
    description: "",
    timer: 0,
    link: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await getBannerData();
      setBanner(response.data);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setBanner({ ...banner, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBannerData(banner);
    alert("Banner updated successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Banner On/Off:
        <input
          type="checkbox"
          name="isVisible"
          checked={banner.isVisible}
          onChange={() =>
            setBanner({ ...banner, isVisible: !banner.isVisible })
          }
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={banner.description}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Timer (seconds):
        <input
          type="number"
          name="timer"
          value={banner.timer}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Link:
        <input
          type="text"
          name="link"
          value={banner.link}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Update Banner</button>
    </form>
  );
};

export default Dashboard;
