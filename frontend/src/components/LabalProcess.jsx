import styled from 'styled-components';

import Button from './Button';

const LabelProcess = ({ error=false, process, year }) => {
  const PageLabel = styled.section`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);

    display: flex;
    justify-content: center;
    align-items: center;

    #label-error {
      width: 40%;
      height: 30%;

      background-color: var(--background-color);
      border-radius: 5px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2, p {
        color: var(--error-color);
      } 
    }

    #label-susses {
      width: 40%;
      height: 30%;

      background-color: var(--background-color);
      border-radius: 5px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        color: var(--select-green);
      }
    }
  `

  if (error) {
    return (
      <PageLabel>
          <div id="label-error">
            <h2>Erro!</h2>
            <p>Verifique os dados</p>
            <Button
              w="160px"
              h="30px"
              fontSize="14px"
            >
              OK!
            </Button>
          </div>
      </PageLabel>
    )
  } else {
    return (
      <PageLabel>
          <div id="label-susess">
            <h2>Processo cadastrado</h2>
            <p>Numero: { process }/{ year }</p>
            <Button
              w="160px"
              h="30px"
              fontSize="14px"
            >
              OK!
            </Button>
          </div>
      </PageLabel>
    )
  }
}

export default LabelProcess;