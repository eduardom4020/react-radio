import React from 'react';
import { createGlobalStyle } from 'styled-components';
// import { RadiosList } from '~/src/modules';
import { DARK_GREY, BLACK_LIKE } from '~/src/constants/colors';
import { BackgroundWebView } from '~/src/components/Background';

const AppWeb = () => {
    return (
        <BackgroundWebView color={DARK_GREY} >
            {/* <RadiosList /> */}
            <p style={{color: 'white'}}>Test!</p>
        </BackgroundWebView>
    );
};

export default AppWeb;