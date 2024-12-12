import React, { useEffect } from "react";

function Map({ onSelectLocation }) {
  useEffect(() => {
    // Initialize Google Maps API here
  }, []);

  const handleLocationSelect = () => {
    onSelectLocation("Sample Location");
  };

  return (
    <div className="map">
      <h2>Google Map Placeholder</h2>
      <button onClick={handleLocationSelect}>Select Location</button>
    </div>
  );
}

export default Map;
