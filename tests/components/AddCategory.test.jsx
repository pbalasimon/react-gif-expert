const { render, screen, fireEvent } = require("@testing-library/react");
const { AddCategory } = require("../../src/components");

describe("<AddCategory />", () => {
  test("should change the input value", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Text" } });
    expect(input.value).toBe("Text");
  });

  test("should call onNewCategory if there is a valid input value", () => {
    const value = "Foo";
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledWith(value);
  });

  test("should't call onNewCategory if there is a invalid input value", () => {
    const value = "";
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
