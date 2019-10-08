import React from 'react';
import { View, Text, Image } from 'react-native';
import { RadiosList } from '~/src/modules';
import { Background } from '~/src/components';

const App = () => {
    return (
        <Background 
            statusBarHeight={0}
            color='#2e2e3a'
        >
            <RadiosList />
        </Background>
    );
};

export default App;