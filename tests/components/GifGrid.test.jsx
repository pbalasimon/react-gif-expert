const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");
jest.mock("../../src/hooks/useFetchGifs");

describe("<GifGrid />", () => {
  const category = "Foo";

  test("should show loading on init", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("should images when images area loaded by the custom Hooks", () => {
    const images = [
      {
        id: "ABC",
        title: "Title",
        url: "https://...",
      },
      {
        id: "ABC2",
        title: "Title2",
        url: "https://2..",
      },
    ];

    useFetchGifs.mockReturnValue({
      images,
      isLoading: false,
    });
    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
