import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Minus from '~/assets/minus.png';
import Plus from '~/assets/plus.png';

const RadioDetailViewDefault = props => {
    return (
        <View
            style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
        >
            <Image source={Minus} style={{width: 24, height: 24}}/>
            <Image 
                source={{ uri: 'https://i.pinimg.com/originals/38/85/e5/3885e5a763c9b06e6464ccb7e0cb1e2f.jpg'}} 
                style={{width: 192, height: 192, borderRadius: 192 / 2}}
            />
            <Image source={Plus} style={{width: 24, height: 24}}/>
        </View>
    );
};

export default RadioDetailViewDefault;