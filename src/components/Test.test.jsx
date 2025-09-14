import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Test from "./Test";
import { test } from "vitest";

test('renders Test Heading heading',() =>{
    render (<Test/>);
    const heading = screen.getByText(/Test Heading/i);
    expect (heading).toBeInTheDocument();
})