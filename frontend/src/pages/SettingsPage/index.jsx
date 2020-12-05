import styled from 'styled-components';

import Header from '../../components/Header';
import Page from '../../components/Page';
import SlideButton from '../../components/SlideButton';

const SettingsPage = () => {

  const SettingsPage = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 30%;
      height: 35%;

      border-radius: 10px;
      background-color: var(--font-color);

      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 30px;

      label {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px;

        input {
          margin-right: 10px;
          cursor: pointer;
          width: 20px;
          height: 20px;
        }
      }
    }
  `

  return (
    <Page>
        <Header />
        <SettingsPage>
          <div>
            <label>
              <SlideButton />
              Modo escuro
            </label>
            <label>
              <SlideButton />
              Modo com filtro
            </label>
          </div>
        </SettingsPage>
    </Page>
  )
}

export default SettingsPage;