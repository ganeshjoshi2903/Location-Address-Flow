import React from "react";

function AddressForm({ location }) {
  return (
    <div className="address-form">
      <h2>Address Details</h2>
      <p>Selected Location: {location}</p>
      <form>
        <label>House/Flat/Block No.:</label>
        <input type="text" />
        <label>Apartment/Road/Area:</label>
        <input type="text" />
        <button type="submit">Save Address</button>
      </form>
    </div>
  );
}

export default AddressForm;
