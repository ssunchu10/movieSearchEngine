import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  // it("Header Component should Render", () => {
  //   const headerElement = render(<Header />);
   
  //   const element = screen.getByText("");
  //   expect(element).toBeInTheDocument();
  // });
  it("Header Component should Render", () => {
    const headerElement = render(<Header title={"Sumit"} />);
   
    const element = screen.getByText("Sumit");
    expect(element).toBeInTheDocument();
  });
});
