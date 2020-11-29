import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import Page from '../../components/Page';
import MenuLeft from '../../components/MenuLeft';
import Main from '../../components/Main';
import Button from '../../components/Button';

import logoInfo from '../../icons/logoInfo.svg';


function Info() {
    return (
        <Page>
            <MenuLeft className="menu">
                <h2>
                    Sistema de protocolo
                </h2>

                <Link to="/login">
                    <Button
                        className="button"
                        w="80%"
                        h="55px"
                        fontSize="24px"
                    >
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