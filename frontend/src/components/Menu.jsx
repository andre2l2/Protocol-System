import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Menu = () => {
  const Nav = styled.nav`
    width: 400px;
    height: 100%;

    background-color: var(--menu-color);

    display: flex;
    justify-content: center;
    align-items: center;
    
    position: relative;

    ul {
      width: 90%;

      position: absolute;
      top: 10%;
      left: 100%;
      transform: translate(-100%, 0);
      z-index: 1;

      li {
        margin: 6px 0;

        a {
          font-size: 15px;
          color: var(--font-color);
          font-weight: 200;

          cursor: pointer;

          .selected {
            font-weight: bold;
          }

          &:hover {
            font-weight: bold;
          }
        }
      }
    }
  `

  return (  
    <Nav>
      <ul>
        <li>
          <Link to="/process/">Listagem de processos</Link>
        </li>
        <li>
          <Link to="/create/">Cadastrar processos</Link>
        </li>
        <li>
          <Link to="/existent/" >Cadastrar um processo já existente</Link>
        </li>
      </ul>
    </Nav>
  )
}

export default Menu;