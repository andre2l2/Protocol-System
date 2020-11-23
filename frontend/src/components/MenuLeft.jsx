import styled from 'styled-components';

const MenuLeft = styled.div`
    width: 45%;
    height: 100%;

    background-color: var(--menu-color);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    h2 {
        color: white;
        font-weight: 300;
    }

    button {
        position: absolute;
        top: 80%;
        transform: translate(-50%);

        span {
            margin-right: 10px;
        }
    }
`

export default MenuLeft;