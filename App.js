import React from 'react';
import { RadiosList } from '~/src/modules';
import { Background } from '~/src/components';
import { DARK_GREY } from '~/src/constants/colors';

const App = () => {
    return (
        <Background color={DARK_GREY} >
            <RadiosList />
        </Background>
    );
};

export default App;