import React, { useState } from "react";
import useForm from "../components/useForm";

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const [
    values,
    setValues,
    showSuccessMessage,
    setShowSuccessMessage,
    handleChanges,
    handleSubmit,
  ] = useForm();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 id="checkout form">Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChanges}
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            placeholder="Address"
            value={values.address}
            onChange={handleChanges}
          />
        </label>
        <label>
          City:
          <input
            name="city"
            placeholder="City"
            value={values.city}
            onChange={handleChanges}
          />
        </label>
        <label>
          State:
          <input
            name="state"
            placeholder="State"
            value={values.state}
            onChange={handleChanges}
          />
        </label>
        <label>
          Zip:
          <input
            name="zip"
            placeholder="Zip"
            value={values.zip}
            onChange={handleChanges}
          />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
