import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {

    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipCodeInput = screen.getByLabelText(/zip/i)

    userEvent.type(firstNameInput, "Danielle")
    userEvent.type(lastNameInput, "Strazzeri")
    userEvent.type(addressInput, "123 Main Street")
    userEvent.type(cityInput, "Orlando")
    userEvent.type(stateInput, "Florida")
    userEvent.type(zipCodeInput, "12345")

    const submitButton = screen.getByRole("button")
    userEvent.click(submitButton)

    const successMessageOutput = await screen.findByTestId(/successMessage/i)

    const firstNameOutput = screen.getByLabelText(/First Name:/i)
    const lastNameOutput = screen.getByLabelText(/Last Name:/i)
    const addressOutput = screen.getByLabelText(/Address:/i)
    const cityOutput = screen.getByLabelText(/City:/i)
    const stateOutput = screen.getByLabelText(/State:/i)
    const zipOutput = screen.getByLabelText(/Zip:/i)

    expect(successMessageOutput).toBeInTheDocument()

    expect(firstNameOutput).toBeInTheDocument()
    expect(lastNameOutput).toBeInTheDocument()
    expect(addressOutput).toBeInTheDocument()
    expect(cityOutput).toBeInTheDocument()
    expect(stateOutput).toBeInTheDocument()
    expect(zipOutput).toBeInTheDocument()
});
