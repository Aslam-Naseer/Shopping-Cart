import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";

test("renders App Header", () => {
  const { header } = render(<Header />);
  expect(header).toMatchSnapshot();
});
