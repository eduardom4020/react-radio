import React from 'react';
import { View, Text, Image } from 'react-native';
import { RadiosList } from '~/src/modules';
import { Background } from '~/src/components';
import { Toolbar, Footer } from '~/src/components';

const App = () => {
    return (
        // <Modules.RadiosList />
        <Background color='#2e2e3a'>
            <Toolbar color='#eeae61'>
                <Image source={require('~/assets/back-arrow.png')} style={{width: 24, height: 24}}/>
                <Text style={{color: 'white'}}>STATIONS</Text>
                <Image source={require('~/assets/switch.png')} style={{width: 24, height: 24}}/>
            </Toolbar>
            <RadiosList />
            <Footer color='#191313'>

            </Footer>
        </Background>
    );
};

export default App;