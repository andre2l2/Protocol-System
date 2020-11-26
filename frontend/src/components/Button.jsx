 import styled from 'styled-components';

const Button = styled.button`
    width: ${props => props.w};
    height: ${props => props.h};

    font-size: ${props => props.fontSize};
    color: var(--font-color);

    outline: none;
    margin: 0;
    background-color: var(--button-color);
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 40px;

    font-weight: 400;

    cursor: pointer;
    transition: .2s background;

    &:hover {
        background-color: var(--button-hover);
    }
`

export default Button;