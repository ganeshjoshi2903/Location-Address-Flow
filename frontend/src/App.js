import React, { useState } from "react";
import Modal from "./components/Modal";
import Map from "./components/Map";
import AddressForm from "./components/AddressForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
      <h1>Location/Address Flow</h1>
      <button onClick={() => setShowModal(true)}>Enable Location</button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
      <Map onSelectLocation={handleLocationSelect} />
      {selectedLocation && <AddressForm location={selectedLocation} />}
    </div>
  );
}

export default App;

