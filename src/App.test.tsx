import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the Intake heading", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /intake/i, level: 1 })
    ).toBeInTheDocument();
  });
});
