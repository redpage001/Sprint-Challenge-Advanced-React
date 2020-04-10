import React from "react";
import NavBar from "./NavBar";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

test("Does NavBar render", () => {
    render(<NavBar />)
})

test("Does button toggle dark-mode class", () =>{
    const { getByText } = render(<NavBar />);

    const button = getByText(/Dark Mode/i);

    act(() => {
        fireEvent.click(button);
    });

    expect(document.body.className).toBe("dark-mode");
})