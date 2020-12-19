import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Components 
import logoInfo from '../../icons/logoInfo.svg';
import Button from '../../components/Button';
import MenuLeft from '../../components/MenuLeft';
import Main from '../../components/Main';
import Form from '../Form/Form';

function Login() {
  const Page = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;

    @media (max-width: 860px) {
      flex-direction: column;
    }

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

    .login {
      h1 {
        position: absolute;
        top: 5%;

        font-size: 40px;
        margin-bottom: 20px;
      }

      main {
        width: 350px;
        height: 300px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: var(--menu-color);
        border-radius: 5px;

        form {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        label {
          display: flex;
          flex-direction: column;

          margin-top: 20px ;

          color: white;
        }

        input {
          width: 310px;
          height: 38px;

          font-size: 18px;
          padding-left: 5px;

          border-radius: 2px;
          outline: none;
        }
      }
    }

    @media (max-width: 860px) {
      .menu .btn {
        position: absolute;
        top: 85vh;
        max-width: 80vw;
      }
    }

    @media (max-width: 390px) {
      .login main {
        width: 300px;
      }

      .login main input {
        width: 260px;
      }
    }
  `

  return (
    <Page>
      <MenuLeft className="menu">
        <h2>Sistema de protocolo</h2>
        <Link to="/info">
          <Button
            className="btn"
            w="80%"
            h="55px"
            fontSize="24px"
          >
            <span>
              <img src={logoInfo} alt="Info"/>
            </span>
            Sobre
          </Button>
        </Link>
      </MenuLeft>

      <Main className="login">
        <h1>Login</h1>
        <main>
          <Form />
        </main>
      </Main>
    </Page>
  )
}

export default Login;