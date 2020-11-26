import React from 'react';

import Page from '../../components/Page';
import MenuLeft from '../../components/MenuLeft';
import Main from '../../components/Main';
import Header from '../../components/Header';

import './style.css';

function Process() {
    return (
        <>
        <Header className="header">
            <div>
                <h2>Olá Name!</h2>
            </div>
            <div>
                <a href="">1</a>
                <a href="">2</a>
                <a href="">3</a>
            </div>
        </Header>
        <Page>
            <MenuLeft width="480px" height="100%">

            </MenuLeft>
            <Main>
                
            </Main>
        </Page>
        </>
    )
}

export default Process;