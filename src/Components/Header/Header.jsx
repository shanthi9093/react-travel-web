import React, { useState } from "react";
import headerCSS from "./../Header/Header.module.css";

function Header() {
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!location.trim()) return;
    

    const url = `https://www.google.com/maps/search/${encodeURIComponent(location)}`;
    window.location.href = url; // opens in same tab
  };

  return (
    <div className={`${headerCSS.HeaderWrapper} section`} id="home">
      <div className={headerCSS.Container}>
        <h1>Find Next Place To Trip</h1>
        <small>Discover New Places At Exclusive Deals</small>

        <form onSubmit={handleSearch}>
          <div className={headerCSS.inputWrapper}>
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className={headerCSS.inputWrapper}>
            <label>Check In / Check Out</label>
            <input type="datetime-local" />
          </div>

          <button type="submit">
            <i className="ri-search-line"></i> Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
