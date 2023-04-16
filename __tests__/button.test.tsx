import Button from "@/components/button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  it("renders a button", () => {
    render(<Button> Hello </Button>);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent(/hello/i);
  });
  it("clicks a button", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}> Hello </Button>);

    const btn = screen.getByRole("button");

    fireEvent.click(btn);

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).to;
  });

  it("renders a button unchanged", () => {
    const { container } = render(<Button> Hello </Button>);
    expect(container).toMatchSnapshot();
  });
});
