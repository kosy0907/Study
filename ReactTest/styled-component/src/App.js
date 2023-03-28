import './App.css';
import StyledButton from './components/StyledButton';

const UppercaseButton = (props) => (
  <button {...props} children={props.children.toUpperCase()} />
);

const MyButton = (props) => (
  <button {...props} children={`My ${props.children}`} />
);

function App() {
  return (
    <div className="App">
      <h1>Hello This is Styled Component test page.</h1>
      <StyledButton>Button</StyledButton>
      <StyledButton colorBlue={true}>Button</StyledButton>
      <StyledButton colorBlack={true}>Button</StyledButton>
      <StyledButton as={UppercaseButton}>Button</StyledButton>
      <StyledButton as={MyButton}>Button</StyledButton>
    </div>
  );
}

export default App;
