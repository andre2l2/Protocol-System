import styled from 'styled-components';

const MenuLeft = styled.div`
    width: ${props => props.width || '45%'};
    height: ${props => props.height || '100%'};

    background-color: var(--menu-color);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
`

export default MenuLeft;