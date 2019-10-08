import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const IconButtonViewDefault = props => {
    const { src } = props;

    return (
        <TouchableOpacity>
            <Image
                source={src}
                style={{
                    width: 24, 
                    height: 24
                }}
            />
        </TouchableOpacity>
    );
};

export default IconButtonViewDefault;