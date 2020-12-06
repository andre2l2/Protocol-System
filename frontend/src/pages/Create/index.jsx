import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';

import Page from '../../components/Page';
import Main from '../../components/Main';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Button from '../../components/Button';

import './style.css';

function Create() {
  const formik = useFormik({
    initialValues: {
      number: 400,
      year: 2020,
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
      console.log(values);
      await axios.post('http://localhost:3333/process', values)
    }
  })


  return (
    <>
      <Header/>
      <Page>
        <Menu/>

        <Main>
          <main>
            <form onSubmit={ formik.handleSubmit } method="post">
              <div>
                <label htmlFor="fullName">
                  Nome completo:
                  <input type="text" name="fullName" onChange={ formik.handleChange } />
                </label>
              </div>
              <div>
                <label htmlFor="CEP" >
                  CEP:
                  <input type="text" name="CEP" onChange={ formik.handleChange } />
                </label>
                <label htmlFor="district">
                  Bairro:
                  <input type="text" name="district" onChange={ formik.handleChange } />
                </label>
                <label htmlFor="street" >
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
                <label htmlFor="subject">
                  Assunto:
                  <input type="text" name="subject" onChange={ formik.handleChange } />
                </label>
                <label htmlFor="plus">
                  Mais:
                  <input type="text" name="plus" onChange={ formik.handleChange } />
                </label>
              </div>
              <div>
                <Button
                  type="submit"
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

export default Create;