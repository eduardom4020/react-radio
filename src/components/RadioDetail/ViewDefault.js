import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Minus from '~/assets/minus.png';
import Plus from '~/assets/plus.png';
import IconButton from '~/src/components/IconButton';

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
            <IconButton src={Minus} />
            <Image 
                source={{ uri: 'https://i.pinimg.com/originals/38/85/e5/3885e5a763c9b06e6464ccb7e0cb1e2f.jpg'}} 
                style={{
                    width: 192, 
                    height: 192, 
                    borderRadius: 192 / 2,
                    borderWidth: 2,
                    borderColor: '#a3acbe'
                }}
            />
            <IconButton src={Plus} />
        </View>
    );
};

export default RadioDetailViewDefault;