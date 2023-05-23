import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import App from "./App";

const phoneList = [
  { brand: "OnePlus", name: "11", price: 12345 },
  { brand: "Google", name: "Pixel 7 Pro", price: 23456 },
];

jest.mock("./components/Card.js", () => ({ name }) => (
  <div data-testid="phone">{name}</div>
));

test("renders App Header", () => {
  const { header } = render(<Header />);
  expect(header).toMatchSnapshot();
});

test("Render Shop page", () => {
  render(<Shop />);
  expect(screen.getAllByTestId("phone").length).toBe(27);
});

test("Cart works properly", () => {
  render(<Cart phoneList={phoneList} />);
  expect(screen.getByText("OnePlus 11")).toBeInTheDocument();
  expect(screen.getByText("Google Pixel 7 Pro")).toBeInTheDocument();
});

describe("routing", () => {
  it("samsung", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const brandBtn = screen.getByAltText("samsung");

    await user.click(brandBtn);
    expect(screen.getAllByTestId("phone").length).toBe(8);
  });

  it("apple", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const brandBtn = screen.getByAltText("apple");

    await user.click(brandBtn);
    expect(screen.getAllByTestId("phone").length).toBe(7);
  });

  it("oneplus", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const brandBtn = screen.getByAltText("oneplus");

    await user.click(brandBtn);
    expect(screen.getAllByTestId("phone").length).toBe(4);
  });

  it("google", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const brandBtn = screen.getByAltText("google");

    await user.click(brandBtn);
    expect(screen.getAllByTestId("phone").length).toBe(4);
  });

  it("iqoo", async () => {
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const brandBtn = screen.getByAltText("iqoo");

    await user.click(brandBtn);
    expect(screen.getAllByTestId("phone").length).toBe(4);
  });
});
