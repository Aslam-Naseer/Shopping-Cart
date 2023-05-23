import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import Header from "./components/Header";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

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

test("Cart works properly", async () => {
  const user = userEvent.setup();

  render(<Cart phoneList={phoneList} />);
  expect(screen.getByText("OnePlus 11")).toBeInTheDocument();
  expect(screen.getByText("Google Pixel 7 Pro")).toBeInTheDocument();

  const button = screen.getByRole("button", { name: "Close" });

  await user.click(button);
});
