import { render, screen } from "@testing-library/react";
import Header from "./components/Header";
import Shop from "./components/Shop";

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
