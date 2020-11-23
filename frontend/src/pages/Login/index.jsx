import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import logoInfo from '../../icons/logoInfo.svg';
import Page from '../../components/Page';
import Button from '../../components/Button';
import MenuLeft from '../../components/MenuLeft';
import Main from '../../components/Main';

function Login() {
  return (
    <Page>
      <MenuLeft className="menu">
        <h2>Sistema de protocolo</h2>
        <Link to="/info">
          <Button
            w="300px"
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
          <form action="/login" method="POST">
            <label for="user">
              Usuario:
              <input type="text" name="user"/>
            </label>
            <label for="password">
              Senha:
              <input type="password" name="password"/>
            </label>
            <Button
              w="198px"
              h="48px"
              fontSize="28px" 
            > 
              Entrar
            </Button>
          </form>
        </main>
      </Main>
    </Page>
  )
}

export default Login;