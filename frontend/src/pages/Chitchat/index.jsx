import React from 'react';

import Page from '../../components/Page';
import Chat from '../../components/Chat';
import Header from '../../components/Header';

function Chitchat() {
    return (
        <Page>
            <Header />
            <Chat title="Atendente: name" />
        </Page>
    )
}

export default Chitchat;