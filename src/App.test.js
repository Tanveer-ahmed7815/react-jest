import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import renderer from 'react-test-renderer';
import Users from "./Users";
import handleOtherMethod from "./helper";

beforeAll(() => {
  console.log("-------------- Before all hook -------------")
})

beforeEach(() => {
  console.log("--------------- Before each ---------------")
})

afterAll(() => {
  console.log("-------------- After all hook -------------")
})

afterEach(() => {
  console.log("--------------- After each ---------------")
})

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

  describe("Nested decribe", () => {
    test("API Testing input box", () => {
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      let checkInputPlaceholder = screen.getByPlaceholderText("Enter username");
      expect(checkInput).toBeInTheDocument();
      expect(checkInputPlaceholder).toBeInTheDocument();
    })
  })

})

describe("On change event testing", () => {

  test("Onchange event testing", () => {
    render(<App />)
    let input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'a' } });
    expect(input.value).toBe("atest");
  })

})

describe.skip("On Click event testing for Button", () => {

  test("Onclick event testing for button", () => {
    render(<App />)
    let btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(screen.getByText("updated data")).toBeInTheDocument();
  })

})

describe.skip('Snapshot test cases', () => {
  test('Snapshot for App component', () => {

    const container = render(<App />);
    expect(container).toMatchSnapshot();

  })
})

describe('Class component testing', () => {
  test('User class compponent testing', () => {

   const componentData = renderer.create(<Users />).getInstance();
   expect(componentData.getUserList()).toMatch("user list");

  })
})

describe('Functional component testing', () => {
  test('Functional compponent method testing-1', () => {

   render(<App />)
   const btn = screen.getByTestId("btn1");
   fireEvent.click(btn);
   expect(screen.getByText("hello")).toBeInTheDocument();

  })

  test("Functional compponent method testing-1 for helper methods",()=>{
    expect(handleOtherMethod()).toMatch("Hi");
  })
})