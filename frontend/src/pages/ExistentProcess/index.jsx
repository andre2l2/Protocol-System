import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useFormik } from 'formik'

import Page from '../../components/Page';
import Main from '../../components/Main';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Button from '../../components/Button';
import LabelProcess from '../../components/LabalProcess';

function ExistentProcess() {
  const formik = useFormik({
    initialValues: {
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
    },
    onSubmit: async (values) => {
      await axios.post('http://localhost:3333/process', values);
    }
  })

  const MainFrom = styled.main`
    width: 80%;

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
            <form onSubmit={ formik.handleSubmit }>

              <div>
                <label htmlFor="fullName">
                  Nome completo:
                  <input type="text" name="fullName" onChange={ formik.handleChange }/>
                </label>
              </div>

              <div>
                <label htmlFor="CEP">
                  CEP:
                  <input type="text" name="CEP" onChange={ formik.handleChange }/>
                </label>
                
                <label htmlFor="district">
                  Bairro:
                  <input type="text" name="district" onChange={ formik.handleChange } />
                </label>

                <label htmlFor="street">
                  Rua:
                  <input type="text" name="street" onChange={ formik.handleChange } />
                </label>
              </div>

              <div>
                <label htmlFor="house_number">
                  Numero:
                  <input type="text" name="house_number" onChange={ formik.handleChange } />
                </label>

                <label htmlFor="complement">
                  Complemento:
                  <input type="text" name="complement" onChange={ formik.handleChange } />
                </label>
              </div>

              <hr/>

              <div>
                <label htmlFor="phone_1">
                  Telefone 1:
                  <input type="text" name="phone_1" onChange={ formik.handleChange } />
                </label>

                <label htmlFor="phone_2">
                  Telefone 2:
                  <input type="text" name="phone_2" onChange={ formik.handleChange } />
                </label>

                <label htmlFor="email">
                  Email:
                  <input type="text" name="email" onChange={ formik.handleChange } />
                </label>
              </div>

              <hr/>

              <div>
                <label htmlFor="number">
                  Numero:
                  <input type="text" name="number" onChange={ formik.handleChange } />
                </label>

                <label htmlFor="year">
                  Ano:
                  <input type="text" name="year" onChange={ formik.handleChange } />
                </label>

                <label htmlFor="subject">
                  Assunto:
                  <input type="text" name="subject" onChange={ formik.handleChange } />
                </label>
              </div>

              <div>
                <label htmlFor="plus">
                  Mais:
                  <input type="text" name="plus" onChange={ formik.handleChange } />
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
          </MainFrom>
        </Main>
      </Page>
    </>
  )
}

export default ExistentProcess;