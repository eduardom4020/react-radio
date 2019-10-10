import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const IconButtonViewDefault = props => {
    const { src, style={} } = props;

    return (
        <TouchableOpacity>
            <Image
                source={src}
                style={{
                    width: 24, 
                    height: 24,
                    ...style
                }}
            />
        </TouchableOpacity>
    );
};

export default IconButtonViewDefault;