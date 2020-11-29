import styled from 'styled-components';

const Page = styled.section`
    width: 100vw;
    height: 100vh;

    display: flex;

    @media (max-width: 860px) {
        flex-direction: column;
    }
`

export default Page;