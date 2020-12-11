import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Page from '../../components/Page';
import Button from '../../components/Button';

function FeedBackChat() {
  const MainChat = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .main-info {
      width: 75%;
      height: 65%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;

      border-radius: 10px;
      background-color: var(--font-color);

      p {
        text-align: center;
        font-size: 24px;
        font-weight: normal;
      }
    }

    .main-button {
      flex-direction: column;

      button:last-child {
        margin-top: 20px;
      }
    }
  `

  return (
    <Page>
      <Header />
      <MainChat>
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
      </MainChat>
    </Page>
  )
}

export default FeedBackChat;