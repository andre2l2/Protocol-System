import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components
import MenuLeft from '../../components/MenuLeft';
import Main from '../../components/Main';
import Button from '../../components/Button';

// SVG's
import logoInfo from '../../icons/logoInfo.svg';
import LeftArrow from '../../icons/left-arrow.svg';

function Info() {
  const Page = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;

    .menu {
      h2 {
        color: white;
        font-weight: 300;
      }

      .btn {
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translate(-50%);
      }

      span {
        margin-right: 10px;
    
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .info {
      width: 80%;
      height: 85%;

      padding: 5% 10%;
      background-color: var(--font-color);
      border-radius: 5px;

      h1 {
        font-size: 28px;
        display: flex;

        span {
          margin-right: 15px;

          img {
            width: 33px;
            height: 33px;
          }
        }
      }

      p {
        margin-top: 15px;

        text-align: justify;
        font-size: 20px;
        font-weight: 200;
      }
    }

    @media (max-width: 860px) {
      flex-direction: column;
    }

    @media (max-width: 860px) {
      .menu .btn {
        position: absolute;
        top: 85vh;
        max-width: 80vw;
      }

      .info {
        position: absolute;
        top: 10%;

        width: 80%;
        height: 65%;
      }

      .info h1 {
        font-size: 22px;
      }

      .info h1 span img {
        width: 28px;
        height: 28px;
      }

      .info p {
        font-size: 18px;
      }
    }

    @media (max-width: 390px) {
      .info h1 {
        font-size: 17px;
      }

      .info h1 span img {
        width: 25px;
        height: 25px;
      }

      .info p {
        font-size: 16px;
    }
  }
  `

  return (
    <Page>
      <MenuLeft className="menu">
        <h2>
          Sistema de protocolo
        </h2>

        <Link to="/login">
          <Button
            className="btn"
            w="80%"
            h="55px"
            fontSize="24px"
          >
            <span>
              <img src={LeftArrow} alt="Back"/>
            </span>               
            Login
          </Button> 
        </Link>
      </MenuLeft>

      <Main>
        <div className="info">
          <h1>
            <span>
              <img src={logoInfo} alt="Info"/>
            </span>
            Sobre o sistema
          </h1>
          <p>
            Todo o sistem foi desenvolvido por André Ferreira, o
            sistema tem o propósito de gerenciar processos administrativos, 
            desde a criação de um processo, a consulta do mesmo, e conta com um 
            chat com nossa equipe em casso de erros.
          </p>
        </div>
      </Main>
    </Page>
  )
}

export default Info;