import styled from 'styled-components';
import { Link } from 'react-router-dom';

import chatImage from '../icons/chatImage.svg';
import homeImage from '../icons/homeImage.svg';
import setingsImage from '../icons/setingsImage.svg';

const HeaderTop = ({ children }) => {
  const Header = styled.header`
    background-color: var(--menu-color);
    height: 45px;
    width: 100%;
  
    display: flex;
    align-items: center;
  
    position: absolute;
    z-index: 1;
  `

  const NameArea = styled.div`
    width: 300px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    h2 {
      color: var(--font-color);
      font-weight: 200;
    }

    hr {
      width: 80%;
      height: 3px;
      border: none;
      background-color: var(--font-color);

      position: absolute;
      top: calc(100% - 3px);
    }
  `

  const Nav = styled.nav`
    width: 300px;
    height: 100%;
    margin-left: auto;

    display: flex;

    a {
      margin: 0 20px;
      color: var(--font-color);

      display: flex;
      align-items: center;

      img {
        width: 26px;
        height: 26px;
      }
    }
  `

  return (
    <Header>
      <NameArea>
        <h2>Olá { children || 'name!' }</h2>
        <hr/>
      </NameArea>
      <Nav>
        <Link to="/chatAndCall/">
          <img src={chatImage} alt="Chat"/>
        </Link>
        <Link to="/process/">
          <img src={homeImage} alt="Home"/>
        </Link>
        <Link to="/settings/">
          <img src={setingsImage} alt="Setings"/>
        </Link>
      </Nav>
    </Header>
  )
}

export default HeaderTop;