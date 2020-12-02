import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Page from '../../components/Page';
import Button from '../../components/Button';

import './style.css';

function FeedBackChat() {
  return (
    <Page>
      <Header />
      <main id="main-chat">
        <div className="main-info">
          <p>
            Está área é destinada aos nossos usuáruos para que <br/>
            possam relatar falhas e problemas, ou falar <br/>
            com nossos atendentes.
          </p>
          <div className="main-button">
            <Link to="/chatAndCall/feedback/">
              <Button
                w="300px"
                h="55px"
                fontSize="20px"
              >
                Feedback
              </Button>
            </Link>
            <Link to="/chatAndCall/chitchat/">
              <Button
                w="300px"
                h="55px"
                fontSize="20px"
              >
                Fale conosco
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </Page>
  )
}

export default FeedBackChat;