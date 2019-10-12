import React from 'react';
import { DARK_GREY } from '~/src/constants/colors';
import BackgroundWebView from '~/src/components/Background/ViewWeb';
import RadiosListWebView from '~/src/modules/RadiosList/ViewWeb';

const AppWeb = () => {
    return (
        <BackgroundWebView color={DARK_GREY} >
            <RadiosListWebView />
        </BackgroundWebView>
    );
};

export default AppWeb;