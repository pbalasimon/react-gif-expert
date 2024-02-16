const { renderHook, waitFor } = require("@testing-library/react");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");

describe("useFetchGifs", () => {
  const category = "foo";

  test("should return the initial state", () => {
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return an array with images and isLoading to false", async () => {
    const { result } = renderHook(() => useFetchGifs(category));
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
