import styled from 'styled-components';

interface ProgressProps {
    progress?: number;
}

export const Header = styled.div`
    display: flex;
    align-items:center;
    margin-bottom: 2rem;
    min-width:17.875rem;
`;

export const Span = styled.span`
    font-size: 1rem;
`;

export const ProgressBackground = styled.div`
    flex:1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
`;

export const Progress = styled.div`
    height: 4px;
    border-radius: 4px;
    background:var(--green);
    width: ${(props: ProgressProps) => props.progress ? props.progress : 0}%;
`;

export const CurrentExperience = styled.div`
    position:absolute;
    top:12px;
    left: ${(props: ProgressProps) => props.progress ? props.progress : 0}%;
    transform: translateX(-50%);
`