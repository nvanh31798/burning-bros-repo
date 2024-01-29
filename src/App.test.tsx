import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./utils/utils-test";

test("renders Burning bros interview test", () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/Burning bros interview test/i);
  expect(linkElement).toBeInTheDocument();
});
