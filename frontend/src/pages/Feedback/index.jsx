import React from 'react';

import Header from '../../components/Header';
import Page from '../../components/Page';
import Chat from '../../components/Chat';

function Feedback() {
  return (
    <Page>
      <Header />
      <Chat title="Deixe seu feedback aqui!" />
    </Page>
  )
}

export default Feedback;