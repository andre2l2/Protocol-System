 import styled from 'styled-components';

const Button = styled.button`
    width: ${props => props.w};
    height: ${props => props.h};

    font-weight: 400;
    font-size: ${props => props.fontSize};
    color: var(--font-color);

    outline: none;
    margin: 0;
    z-index: 1;

    background-color: var(--button-color);
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: ${props => props.marginTop || '0'};

    cursor: pointer;
    transition: .2s background;

    &:hover {
        background-color: var(--button-hover);
    }
`

export default Button;