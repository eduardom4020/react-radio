import React from 'react';
import { View, Text } from 'react-native';
import { RadiosList } from '~/src/modules';
import { Background } from '~/src/components';
import { Toolbar, Footer } from '~/src/components';

const App = () => {
    return (
        // <Modules.RadiosList />
        <Background color='#2e2e3a'>
            <Toolbar color='#eeae61'>
                <Text style={{color: 'white'}}>Menu</Text>
            </Toolbar>
            <RadiosList />
            <Footer color='#191313'>

            </Footer>
        </Background>
    );
};

export default App;