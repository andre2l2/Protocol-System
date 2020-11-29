import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import logoInfo from '../../icons/logoInfo.svg';
import Page from '../../components/Page';
import Button from '../../components/Button';
import MenuLeft from '../../components/MenuLeft';
import Main from '../../components/Main';
import Form from '../Form/Form';

function Login() {
  return (
    <Page>
      <MenuLeft className="menu">
        <h2>Sistema de protocolo</h2>
        <Link to="/info">
          <Button
            className="button"
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