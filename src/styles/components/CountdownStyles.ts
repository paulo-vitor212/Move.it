import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    align-items:center;
    font-family: Rajdhani;
    font-weight: 600;
    color: var(--title);
`;

export const NumbersContainer = styled.div`
    flex: 1;

    display:flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
`;

export const PointSpan = styled.span`
    font-size: 6.25rem;
    margin: 0 0.5rem;
`;

export const LeftSpan = styled.span`
    flex:1;
    border-right: 1px solid #F0F1F3;
`;

export const RightSpan = styled.span`
    flex:1;
    border-left: 1px solid #F0F1F3;
`;

const Button = styled.button`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display:flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s;

    &:hover{
        background: var(--blue-dark);
    }
`;

export const CountdownButton = styled(Button)`
    background: var(--blue);
    color: var(--white);
    &:hover{
        background: var(--blue-dark);
    }
`;

export const CountdownPauseButton = styled(Button)`
    background: var(--white);
    color: var(--text);
    &:hover{
        background: var(--red);
        color: var(--white);
    }
`;



