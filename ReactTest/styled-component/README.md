# Styled Component
대표적인 CSS-in-JS 패키지  
Js 파일 내에서 CSS를 사용 가능하게 함
## Install
1. 설치
    ```
    npm i styled-components
    ```
2. package.json 확인
    ```json
    "dependencies": {
        "@testing-library/jest-dom": "^5.16.1",
        "@testing-library/react": "^12.1.2",
        "@testing-library/user-event": "^13.5.0",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-scripts": "5.0.0",
        "styled-components": "^5.3.3",
        "web-vitals": "^2.1.2"
    },
    ```
3. Component 파일에 import 추가 후 사용
    ```js
    import styled from 'styled-components';
    ```
## Example
```js
// src/components/StyledButton.js
const StyledButton = styled.button`
    background: none;
    color: palevioletred;
    border-radius: 3px;
    border: 2px solid palevioletred;
    padding: 0.25em 0.5em;
    font-size: 20px;
    margin: 2em;

    ${props => props.colorBlue && css`
    background: none;
    color: royalblue;
    border: 2px solid royalblue;
    `}

    ${props => props.colorBlack && css`
    color: black;
    border: 2px solid black;
    `}
`;
```
```js
// App.js
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
```