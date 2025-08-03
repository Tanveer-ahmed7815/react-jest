import { fireEvent, render, screen, configure, within, act } from "@testing-library/react";
import App from "./App";
import renderer from 'react-test-renderer';
import Users from "./Users";
import handleOtherMethod from "./helper";
import userEvent from "@testing-library/user-event";
configure({testIdAttribute:'element-id'})

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

describe.skip("UI test case group", () => {

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

describe.skip("API test case group", () => {

  test("API Test first React app case", () => {
    render(<App />);
    let text = screen.getByText(/First React test Case/i);
    const title = screen.getByTitle("AI Genrated Image");
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();

  })

  describe.skip("Nested decribe", () => {
    test("API Testing input box", () => {
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      let checkInputPlaceholder = screen.getByPlaceholderText("Enter username");
      expect(checkInput).toBeInTheDocument();
      expect(checkInputPlaceholder).toBeInTheDocument();
    })
  })

})

describe.skip("On change event testing", () => {

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

describe.skip('Class component testing', () => {
  test('User class compponent testing', () => {

    const componentData = renderer.create(<Users />).getInstance();
    expect(componentData.getUserList()).toMatch("user list");

  })
})

describe.skip('Functional component testing', () => {
  test('Functional compponent method testing-1', () => {

    render(<App />)
    const btn = screen.getByTestId("btn1");
    fireEvent.click(btn);
    expect(screen.getByText("hello")).toBeInTheDocument();

  })

  test("Functional compponent method testing-1 for helper methods", () => {
    expect(handleOtherMethod()).toMatch("Hi");
  })
})

describe.skip("get by role", () => {
  test("getByRole testing", () => {
    render(<App />)
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveValue("hello");
    expect(inputField).toBeDisabled();
  })

  test("multiple role testing", () => {
    render(<App />)
    const btn1 = screen.getByRole("button", { name: "Click me" });
    expect(btn1).toBeInTheDocument();

  })

  test("non-semantic role testing", () => {
    render(<App />)
    const div1 = screen.getByRole("dummy");
    expect(div1).toBeInTheDocument();

  })
})

describe.skip('getAllByRole testing', () => {
  test('getAllByRole testing for button', () => {
    render(<App />);
    const btns = screen.getAllByRole("button");
    const options = screen.getAllByRole("option");

    for (let index = 0; index < btns.length; index++) {
      expect(btns[index]).toBeInTheDocument();
    }

    for (let index = 0; index < options.length; index++) {
      expect(options[index]).toBeInTheDocument();
    }
  })
})

describe.skip('getByLabelText/getAllByLabelText testing', () => {
  test('getByLabelText testing', () => {

    render(<App />);
    // const input = screen.getByLabelText("Username")
    // expect(input).toBeInTheDocument();
    // expect(input).toHaveValue("Tanveer")

  })

  test('getByLabelText testing for checkbox', () => {

    render(<App />);
    const checkbox = screen.getByLabelText("Skills")
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();

  })

  test('getAllByLabelText testing', () => {

    render(<App />);
    const inputs = screen.getAllByLabelText("Username")
    expect(inputs[1]).toBeInTheDocument();

    for (let index = 0; index < inputs.length; index++) {
      expect(inputs[index]).toBeInTheDocument();
      expect(inputs[index]).toHaveValue("Tanveer")
      
    }

  })
})

describe.skip('getByPlaceholderText testing', () => {
  test('getByPlaceholderText testing', () => {
    render(<App />);
    // const inputs = screen.getByPlaceholderText("enter username")
    // expect(inputs).toBeInTheDocument();
    // expect(inputs).toHaveValue("Tanveer")

  })
  test('getByPlaceholderText testing', () => {
    render(<App />);
    const inputs = screen.getAllByPlaceholderText("enter username");
    
    for (let index = 0; index < inputs.length; index++) {
      expect(inputs[index]).toBeInTheDocument();
      
    }

  })
})

describe.skip('getByPlaceholderText testing', () => {
  test('getByPlaceholderText testing', () => {
    render(<App />);
    // const inputs = screen.getByText("Login")
    // expect(inputs).toBeInTheDocument();

  })
  test('getByPlaceholderText testing', () => {
    render(<App />);
    const inputs = screen.getAllByText("Login");
    
    for (let index = 0; index < inputs.length; index++) {
      expect(inputs[index]).toBeInTheDocument();
      
     }

  })
})

describe.skip('getByTestId/getAllByTestId testing', () => {
  test('getByTestId testing', () => {
    render(<App />);
    const inputs = screen.getByTestId("div-test-id")
    expect(inputs).toBeInTheDocument();

  })
})

describe.skip('Overrriding test testing', () => {
  test('getByTestId testing', () => {
    render(<App />);
    const inputs = screen.getByTestId("div-test-id")
    expect(inputs).toBeInTheDocument();

  })
})

describe.skip('Testing with display value', () => {
  test('getByDisplayValue testing', () => {
    render(<App />);
    const inputs = screen.getByDisplayValue("Ahmed")
    expect(inputs).toBeInTheDocument();

  })
})

describe.skip('Testing with title', () => {
  test('getByTitle testing', () => {
    render(<App />);
    const inputs = screen.getByTitle("click me button")
    expect(inputs).toBeInTheDocument();

  })
})

describe.skip('Testing with Alt text', () => {
  test('getByTitle testing', () => {
    render(<App />);
    const inputs = screen.getByAltText("dummy image")
    expect(inputs).toBeInTheDocument();

  })
})

describe.skip('Testing for text match with String/regex', () => {
  test('text match testing with string', () => {
    render(<App />);
    const inputs = screen.getByText("Text ",{exact:false})
    expect(inputs).toBeInTheDocument();

  })

  test('text match testing with regex', () => {
    render(<App />);
    const inputs = screen.getByText(/text/)
    expect(inputs).toBeInTheDocument();

  })
})

describe.skip('Testing for text match with function', () => {
  test('text match testing with function', () => {
    render(<App />);
    //const inputs = screen.getByText((content,element)=> content.startsWith("Text"));
    // const inputs = screen.getByText((content,element)=> content.endsWith("match"));
    const inputs = screen.getByText((content,element)=> {
      return content.includes("ex")
    });
    expect(inputs).toBeInTheDocument();

  })
})

describe.skip('Testing for queryBy', () => {
  test('queryBy testing', () => {
    render(<App />);
    const inputs = screen.queryByText("Logout-hidden")
  
    expect(inputs).not.toBeInTheDocument();

  })
})

describe.skip('Testing for findBy',  () => {
  test('findBy testing', () => {
    render(<App />);
    const inputs = screen.findByText("data found",);
  
    expect(inputs).toBeInTheDocument();

  })
})

describe.skip('Testing for custome query',  () => {
  test('querySelector testing', () => {
    render(<App />);

    const element = document.querySelector('#testId')
    expect(element).toBeInTheDocument();

  })
})

describe.skip('Testing for Querying within elements',  () => {
  test('Query within elements testing', () => {
    render(<App />);

    const element = screen.getByText("Hello world");
    const subElement = within(element).getByText("Hi")
    expect(element).toBeInTheDocument();
    expect(subElement).toBeInTheDocument();

  })
})

describe.skip('Testing for click event with user event library',  () => {
  test('User event library testing', async () => {
    userEvent.setup();
    render(<App />);

    const btn = screen.getByText("Click me");
    await userEvent.click(btn);
    expect(screen.getByText("hello")).toBeInTheDocument();

  })
})

describe.skip('Testing for onchange event',  () => {
  test('Onchange event testing', async () => {
    userEvent.setup();
    render(<App />);

    const el = screen.getByRole("textbox");
    await userEvent.type(el,"Tanveer")
    expect(screen.getByText("Tanveer")).toBeInTheDocument();

  })
})

describe('Testing for Act function',  () => {
  test('Act function testing', async () => {
    userEvent.setup();
    render(<App />);

    const el = screen.getByRole("textbox");
    
    await act(async () =>{
      await userEvent.type(el,"Tanveer");
    })

    expect(screen.getByText("Tanveer")).toBeInTheDocument();

  })
})