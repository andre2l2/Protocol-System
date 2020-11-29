import React from 'react';

import Page from '../../components/Page';
import MenuLeft from '../../components/MenuLeft';
import Main from '../../components/Main';
import Header from '../../components/Header';

import homeImage from '../../icons/homeImage.svg';
import chatImage from '../../icons/chatImage.svg';
import setingsImage from '../../icons/setingsImage.svg';

import './style.css';

function Process() {
    return (
        <>
        <Header className="header">
            <div>
                <a href="">
                    <img src={chatImage} alt="Chat"/>
                </a>
                <a href="">
                    <img src={homeImage} alt="Home"/>
                </a>
                <a href="">
                    <img src={setingsImage} alt="Setings"/>
                </a>
            </div>
        </Header>
        <Page>
            <MenuLeft width="400px" className="menuLeft">
                <h2>Olá TEST</h2>
                <hr/>
                <ul>
                    <li >
                        <a >Listagem de processos</a>
                    </li>
                    <li>
                        <a >Cadastrar processos</a>
                    </li>
                    <li>
                        <a >Cadastrar um processo já existente</a>
                    </li>
                </ul>
            </MenuLeft>
            <Main>
                
            </Main>
        </Page>
        </>
    )
}

export default Process;