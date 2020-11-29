import styled from 'styled-components';

const MenuLeft = styled.div`
    width: ${props => props.width || '45%'};
    height: ${props => props.height || '100%'};

    background-color: var(--menu-color);

    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;

    @media (max-width: 860px) {
        width: 100%;
        height: 55px;
    }
`

export default MenuLeft;