import React from 'react';
import { useFormik } from 'formik';
import { Link, Redirect } from 'react-router-dom';

import axios from 'axios';

import Button from '../../components/Button';
import memory from '../../test/memory';

function Form() {
    const formik = useFormik({
        initialValues: {
            user: '',
            password: ''
        },
        onSubmit: async (values) => {
            await axios.post('http://localhost:3333/login', values)
                .then((res) => {
                    memory.push(res.data);
            });
        }
    })
    
    return (
        <form onSubmit={ formik.handleSubmit }>
            <label htmlFor="user">
                Usuario:
                <input type="text" name="user" onChange={ formik.handleChange } />
            </label>
            <label htmlFor="password">
                Password:
                <input type="password" name="password" onChange={ formik.handleChange } />
            </label>
            <Button 
                type="submit"
                w="195px"
                h="50px"
                fontSize="24px"
                marginTop="40px"
            >   
            Entrar
            </Button>
        </form>
    )
}

export default Form;