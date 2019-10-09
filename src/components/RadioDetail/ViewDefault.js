import React from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import Minus from '~/assets/minus.png';
import Plus from '~/assets/plus.png';
import * as Images from '~/assets';
import IconButton from '~/src/components/IconButton';

const RadioDetailViewDefault = props => {
    const { imageTag='', style={}, onTouchImage } = props;

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                overflow: 'hidden',
                ...style
            }}
        >
            <IconButton src={Minus} />
            <TouchableWithoutFeedback onPress={onTouchImage}>
                <Image 
                    source={Images[imageTag]} 
                    style={{
                        width: 192, 
                        height: '100%',
                        maxHeight: 192,
                        borderRadius: 192 / 2,
                        borderWidth: 2,
                        borderColor: '#a3acbe'
                    }}
                />
            </TouchableWithoutFeedback>
            <IconButton src={Plus} />
        </View>
    );
};

export default RadioDetailViewDefault;