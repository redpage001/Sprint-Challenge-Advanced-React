import React from "react";
import PlayerCard from "./PlayerCard";
import { render } from "@testing-library/react";

test("Does PlayerCard render", () => {
    render(<PlayerCard />)
})

test("A PlayerCard that is filled with mock data renders to the page", () => {
    const { getByText } = render(<PlayerCard name={"Manuel"} country={"United States"} searches={"50"} />)

    const name = getByText(/Manuel/i)
    const country = getByText(/United States/i)
    const searches = getByText(/50/i)

    expect(name.innerHTML).toBe("Name: Manuel")
    expect(country.innerHTML).toBe("Country: United States")
    expect(searches.innerHTML).toBe("Searches: 50")
})

