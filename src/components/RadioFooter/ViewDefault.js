import React from 'react';
import { Text } from 'react-native';
import Footer from '~/src/components/Footer';

const RadioFooterViewDefault = props => {
    const { radioTitle } = props;

    return (
        <Footer {...props} >
            {
                radioTitle &&
                    <>
                        <Text style={{color: '#eeae61', fontSize: 12, fontWeight: 'bold'}}>CURRENTLY PLAYING</Text>
                        <Text style={{color: '#a3acbe', fontSize: 32}}>{radioTitle}</Text>
                    </>
            }
        </Footer>
    );  
};

export default RadioFooterViewDefault;