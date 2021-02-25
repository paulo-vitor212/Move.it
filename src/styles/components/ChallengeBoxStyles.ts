import styled from 'styled-components';

export const Container = styled.div`
    height:100%;

    background:var(--white);

    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0,0,0,0.05);

    padding: 1.5rem 0;
`;
// Box Active
export const ChallangeActive = styled.div`
    display:flex;
    flex-direction:column; 
    align-items:center;
    justify-content:center;
    height:100%;
    padding: 0 2rem;
`;

export const Header = styled.header`
    width:90%;
    text-align:center;
    color: var(--blue);
    font-size: 1.25rem;
    font-weight: 600;
    padding:0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
`;

export const Main = styled.main`
    flex:1;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding: 2rem 0;

    strong{
        font-size: 2rem;
        font-weight:600;
        color: var(--title);
        text-align:center;
        line-height:2.5rem;
        margin:1.5rem 0 1rem;
    }

    p{
        font-size: 1rem;
        text-align:center;
        line-height:1.625rem;
        margin-top:0.5rem;
    }
`;

export const IconBody = styled.img`
    width: 8.75rem;
`;

export const Footer = styled.footer`
    width:100%;

    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

export const Button = styled.button`
    height: 3rem;

    display:flex;
    justify-content:center;
    align-items:center;

    border: 0;    
    border-radius:5px;

    color: var(--white);

    font-size:1rem;
    font-weight:600;

    margin-top:2rem;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);
    }
`;

export const ButtonFailed = styled(Button)`
    background: var(--red);
`;

export const ButtonSuccess = styled(Button)`
    background: var(--green);
`;


// Box Not Active
export const ChallangeNotActive = styled.div`
    display:flex;
    flex-direction:column; 
    align-items:center;
    justify-content:center;
    height:100%;
`;

export const TextStrong = styled.strong`
    font-size: 1.5rem;
    font-weight:500;
    line-height: 1.4;
    text-align:center;

`;

export const SubText = styled.strong`
    font-size: 1rem;
    text-align: start;
    line-height: 1.4;

    display:flex;
    align-items:center;
    justify-content:center;
    max-width:80%;

    margin-top: 3rem;
`;

export const IconLevelUp = styled.img`
    width: 2rem;
    margin-right: 24px;
`;




