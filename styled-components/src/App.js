import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import StyledButton from "./components/StyledButton";
import logo from "./logo.svg";
import StyledA from "./components/StyledA";

const PrimaryStyledButton = styled(StyledButton)`
  background: pink;
  color: white;
`;

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

const MyButton = (props) => (
  <button className={props.className} children={`MyButton ${props.children}`} />
);

//글로벌스타일
const GlobalStyle = createGlobalStyle`
button {
  color: yellow;
}
`;

const StyledMyButton = styled(MyButton)`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.color || "pink"};
  color: ${(props) => props.color || "pink"};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  :hover {
    border: 2px solid red;
  }

  ::before {
    content: "@";
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <StyledButton>button</StyledButton>
          <StyledButton primary>button</StyledButton>
          <PrimaryStyledButton>button</PrimaryStyledButton>
          <StyledButton as="a" href="/">
            button
          </StyledButton>
          <StyledButton as={UppercaseButton}>button</StyledButton>
          <StyledMyButton>button</StyledMyButton>
          <StyledMyButton color="green">button</StyledMyButton>
          <StyledA href="https://google.com">tag</StyledA>
        </p>
      </header>
    </div>
  );
}

export default App;
