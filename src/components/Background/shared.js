import { css } from 'styled-components';

export const BackgroundStyle = css`
    width: 100%;
    height: 100%;
    background-color: ${props => props.color || 'white'};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;