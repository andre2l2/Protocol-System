import styled from 'styled-components';

import sendMensageIcon from '../icons/send-menssage.svg';

const Chat = ({ title }) => {
  function sendMenssage() {
    const $inputMenssage = document.querySelector('#mensage-chat');
    document.querySelector('#render-chat ul').innerHTML += `
      <li>${$inputMenssage.value}</li>
    `

    $inputMenssage.value = '';
  }


  const MainFeedback = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    .chat {
      width: 75%;
      height: 65%;

      border-radius: 10px;
      background-color: var(--font-color);

      display: flex;
      flex-direction: column;

      position: relative;

      header {
        width: 100%;
        height: 55px;

        position: absolute;
        top: 0;

        border-radius: 10px 10px 0 0;
        background-color: var(--menu-color);

        display: flex;
        align-items: center;

        h2 {
          color: var(--font-color);
          font-weight: 200;
          margin-left: 2%;
        }
      }

      section {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      footer {
        width: 100%;
        height: 50px;

        position: absolute;
        bottom: 0;

        display: flex;

        border-radius: 0 0 10px 10px;
        background-color: var(--menu-color);

        input {
          width: 100%;

          font-size: 24px;
          padding-left: 10px;

          color: var(--font-color);
          border-radius: 0 0 0 10px;
          background-color: var(--menu-color);
        }

        button {
          width: 100px;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 0 0 10px 0;
          background-color: var(--button-color);

          cursor: pointer;
        }
      }
    }
  `

  return (
    <MainFeedback>
      <div className="chat">
        <header>
          <h2>{ title }</h2>
        </header>
        <section id="render-chat">
          <ul>

          </ul>
        </section>
        <footer>
          <input type="text" id="mensage-chat" autoFocus="true"/>
          <button onClick={ sendMenssage } >
            <img src={ sendMensageIcon } alt="Enviar"/>
          </button>
        </footer>
      </div>
    </MainFeedback>
  )
}

export default Chat;