import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("UI test case group", () => {

  test("Test first React app case", () => {
    render(<App />);
    let text = screen.getByText(/First React test Case/i);
    const title = screen.getByTitle("AI Genrated Image");
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();

  })

  test("Testing input box", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    let checkInputPlaceholder = screen.getByPlaceholderText("Enter username");
    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceholder).toBeInTheDocument();
  })

})

describe("API test case group", () => {

  test("API Test first React app case", () => {
    render(<App />);
    let text = screen.getByText(/First React test Case/i);
    const title = screen.getByTitle("AI Genrated Image");
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();

  })

  describe("Nested decribe",()=>{
    test("API Testing input box", () => {
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      let checkInputPlaceholder = screen.getByPlaceholderText("Enter username");
      expect(checkInput).toBeInTheDocument();
      expect(checkInputPlaceholder).toBeInTheDocument();
    })
  })

})

describe("On change event testing",()=>{

  test("Onchange event testing",()=>{
    render(<App />)
    let input = screen.getByRole("textbox");
    fireEvent.change(input,{target:{value:'a'}});
    expect(input.value).toBe("atest");
  })

})