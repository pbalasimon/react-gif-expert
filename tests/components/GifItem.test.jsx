import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("<GifItem />", () => {
  const title = "This is the title";
  const url = "http://...";
  test("should match the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should render the img with the url and alt", () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole("img");
    expect(src).toContain(url);
    expect(alt).toBe(title);
  });

  test("should show the title", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
