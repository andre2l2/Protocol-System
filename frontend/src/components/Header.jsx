import styled from 'styled-components';

const Header = styled.header`
    background-color: var(--menu-color);
    height: 45px;
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    position: absolute;
    z-index: 1;
`;

export default Header;