import React from "react";
import Home from "../components/pages/Home";
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("first section renders with title and text correctly", () => {
    const { getByTestId } = render(<Home />);
    const homeBarSectionEl = getByTestId('home__bar--section');
    const homeBarH2El = getByTestId('home__bar--h2');

    expect(homeBarSectionEl).toContainElement(homeBarH2El);
    expect(homeBarH2El.textContent).toBe('Notícias por candidato');
})

test("second section renders with title and text correctly", () => {
    const { getByTestId } = render(<Home />);
    const homeHorizontalBarSectionEl = getByTestId('home__horizontal--bar--section');
    const homeHorizontalBarH2El = getByTestId('home__horizontal--bar--h2');

    expect(homeHorizontalBarSectionEl).toContainElement(homeHorizontalBarH2El);
    expect(homeHorizontalBarH2El.textContent).toBe('Notícias por candidato por mês');
})

test("third section renders with title and text correctly", () => {
    const { getByTestId } = render(<Home />);
    const homePieSectionEl = getByTestId('home__pie--section');
    const homePieH2El = getByTestId('home__pie--h2');

    expect(homePieSectionEl).toContainElement(homePieH2El);
    expect(homePieH2El.textContent).toBe('Notícias por jornal');
})
