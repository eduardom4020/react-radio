import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { DARK_GREY, BLACK_LIKE } from '~/src/constants/colors';
import { BackgroundStyle } from './shared';

const Body = createGlobalStyle`
    body {
        width: 100%;
        height: 100%;
        height: -webkit-fill-available;
        background-color: ${props => props.color || BLACK_LIKE};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const StyledWrapper = styled.div`${BackgroundStyle}`;
const BackgroundWrapper = styled(StyledWrapper)`
    width: 35vw;
    height: 80vh;
    border: 1px solid white;
    border-radius: 64px;
`;

const BackgroundWebView = props => {
    const { children, ...extraProps } = props;
    console.log('On background web view')
    return (
        <>
            <Body color={BLACK_LIKE} />
            <BackgroundWrapper {...extraProps} >
                { children }
            </BackgroundWrapper>
        </>
    );
};

export default BackgroundWebView;