import styled, { css } from 'styled-components';

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

export default StyledButton;