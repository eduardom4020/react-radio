import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { MEDIUM_GREY, BLACK_LIKE } from '~/src/constants/colors';
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
    width: 28vw;
    height: 82vh;
    border-radius: 24px;
    box-shadow: 0 16px 12px 4px #00000040;
    overflow: hidden;
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