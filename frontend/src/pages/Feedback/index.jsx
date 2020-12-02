import React from 'react';

import Header from '../../components/Header';
import Page from '../../components/Page';
import sendMensage from '../../icons/send-menssage.svg';

import './style.css';

function Feedback() {
  return (
    <Page>
      <Header />
      <main id="main-feedback">
        <div className="chat">
          <header>
            <h2>Deixe seu feedback aqui!</h2>
          </header>
          <section>

          </section>
          <footer>
            <input type="text" autoFocus="true"/>
            <button>
              <img src={ sendMensage } alt="Enviar"/>
            </button>
          </footer>
        </div>
      </main>
    </Page>
  )
}

export default Feedback;