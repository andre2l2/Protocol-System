import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Page from '../../components/Page';
import Main from '../../components/Main';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Button from '../../components/Button';

function ExistentProcess() {

  const submetProcess = async () => {
    const $process = document.querySelectorAll('#existent-process input');
    const initialValues = {
      number: '',
      year: '',
      fullName: '',
      CEP: '',
      district: '',
      street: '',
      house_number: '',
      complement: '',
      phone_1: '',
      phone_2: '',
      email: '',
      subject: '',
      plus: ''
    }

    initialValues.number = $process[9].value;
    initialValues.year = $process[10].value;
    initialValues.fullName = $process[0].value;
    initialValues.CEP = $process[1].value;
    initialValues.district = $process[2].value;
    initialValues.house_number = $process[3].value;
    initialValues.complement = $process[4].value;
    initialValues.complement = $process[5].value;
    initialValues.phone_1 = $process[6].value;
    initialValues.phone_2 = $process[7].value;
    initialValues.email = $process[8].value;
    initialValues.subject = $process[11].value;
    initialValues.plus = $process[12].value;

    await axios.post('http://localhost:3333/process', initialValues);

    $process.forEach((input) => {
      input.value = '';
    })
  }

  const MainFrom = styled.main`
    width: 80%;

    main {
      width: 100%;

        div {
        display: flex;

        label {
          display: flex;
          flex-direction: column;

          width: 100%;
          padding: 5px;

          input {
            height: 35px;
            font-size: 18px;
            padding-left: 3px;
            border-radius: 3px;
          }
        }
      }
    }

    hr {
      margin: 10px 0;
      width: 100%;
      height: 5px;
      border: none;
      background-color: var(--menu-color);
    }

    div:last-child {
      margin-top: 20px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  return (
    <>
      <Header />
      <Page>
        <Menu/>
        <Main>
          <MainFrom>
            <main id="existent-process">

              <div>
                <label htmlFor="fullName">
                  Nome completo:
                  <input type="text" name="fullName" />
                </label>
              </div>

              <div>
                <label htmlFor="CEP">
                  CEP:
                  <input type="text" name="CEP" />
                </label>
                
                <label htmlFor="district">
                  Bairro:
                  <input type="text" name="district"  />
                </label>

                <label htmlFor="street">
                  Rua:
                  <input type="text" name="street"  />
                </label>
              </div>

              <div>
                <label htmlFor="house_number">
                  Numero:
                  <input type="text" name="house_number"  />
                </label>

                <label htmlFor="complement">
                  Complemento:
                  <input type="text" name="complement"  />
                </label>
              </div>

              <hr/>

              <div>
                <label htmlFor="phone_1">
                  Telefone 1:
                  <input type="text" name="phone_1"  />
                </label>

                <label htmlFor="phone_2">
                  Telefone 2:
                  <input type="text" name="phone_2"  />
                </label>

                <label htmlFor="email">
                  Email:
                  <input type="text" name="email"  />
                </label>
              </div>

              <hr/>

              <div>
                <label htmlFor="number">
                  Numero:
                  <input type="text" name="number"  />
                </label>

                <label htmlFor="year">
                  Ano:
                  <input type="text" name="year"  />
                </label>

                <label htmlFor="subject">
                  Assunto:
                  <input type="text" name="subject"  />
                </label>
              </div>

              <div>
                <label htmlFor="plus">
                  Mais:
                  <input type="text" name="plus"  />
                </label>
              </div>

              <div>
                <Button
                  onClick={ submetProcess }
                  w="230px"
                  h="50px"
                  fontSize="22px"
                >
                  Cadastrar
                </Button>
              </div>
              
            </main>
          </MainFrom>
        </Main>
      </Page>
    </>
  )
}

export default ExistentProcess;