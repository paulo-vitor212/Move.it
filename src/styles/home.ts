import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 2.5rem 2rem;

    @media(max-width: 320px) {
        & {
            padding-right: 1.8rem;
            padding-left: 1rem;
        }
    }

    display:flex;
    flex-direction: column;
`;

export const Section = styled.section`
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content:center;

    @media(max-width: 800px) {
        &{
            grid-template-columns: 1fr;
            padding-bottom: 4rem;
        }
    }
`;

export const LeftContainer = styled.div`
    /* display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center; */
`;