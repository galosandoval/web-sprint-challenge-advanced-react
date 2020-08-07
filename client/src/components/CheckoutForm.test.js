import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
  render(<CheckoutForm />);
  screen.findByText(/checkout form/i);
  expect(await screen.findByText(/checkout form/i)).toBeInTheDocument();
  // cleanup()
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  // find inputs
  const firstName = screen.getByPlaceholderText(/first name/i);
  const lastName = screen.getByPlaceholderText(/last name/i);
  const address = screen.getByPlaceholderText(/address/i);
  const city = screen.getByPlaceholderText(/city/i);
  const state = screen.getByPlaceholderText(/state/i);
  const zip = screen.getByPlaceholderText(/zip/i);

  //add text to inputs
  fireEvent.change(firstName, { target: { value: "galo" } });
  fireEvent.change(lastName, { target: { value: "sandoval" } });
  fireEvent.change(address, { target: { value: "123 fake st" } });
  fireEvent.change(city, { target: { value: "LA" } });
  fireEvent.change(state, { target: { value: "CA" } });
  fireEvent.change(zip, { target: { value: "90018" } });

  // find submit button
  const submitBtn = screen.getByRole("button", { name: "Checkout" });

  // click button
  fireEvent.click(submitBtn);

  // find confirmation message
  expect(screen.getByText(/you have ordered some plants! woo-hoo!/i))
});
