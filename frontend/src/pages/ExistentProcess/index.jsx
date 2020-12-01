import React from 'react';

import Page from '../../components/Page';
import Main from '../../components/Main';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Button from '../../components/Button';

import './style.css';

function ExistentProcess() {
  return (
    <>
      <Header />
      <Page>
        <Menu/>
        <Main>
          <main>
            <form method="push">
            
            <div>
              <label>
                Nome completo:
                <input type="text"/>
              </label>
            </div>
            <div>
              <label>
                CEP:
                <input type="text"/>
              </label>
              <label>
                Bairro:
                <input type="text"/>
              </label>
              <label>
                Rua:
                <input type="text"/>
              </label>
            </div>
            <div>
              <label>
                Numero:
                <input type="text"/>
              </label>
              <label>
                Complemento:
                <input type="text"/>
              </label>
            </div>
            <hr/>
            <div>
              <label>
                Telefone 1:
                <input type="text"/>
              </label>
              <label>
                Telefone 2:
                <input type="text"/>
              </label>
              <label>
                Email:
                <input type="text"/>
              </label>
            </div>
            <hr/>
            <div>
              <label>
                Numero:
                <input type="text"/>
              </label>
              <label>
                Ano:
                <input type="text"/>
              </label>
              <label>
                Assunto:
                <input type="text"/>
              </label>
            </div>
            <div>
              <label>
                Mais:
                <input type="text"/>
              </label>
            </div>
            <div>
              <Button
                w="230px"
                h="50px"
                fontSize="22px"
              >
                Cadastrar
              </Button>
            </div>

            </form>
          </main>
        </Main>
      </Page>
    </>
  )
}

export default ExistentProcess;