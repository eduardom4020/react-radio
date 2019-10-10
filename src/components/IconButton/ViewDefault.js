import React from 'react';
import styled from 'styled-components';
import { Image, TouchableOpacity } from 'react-native';
import { DEFAULT_ICON_BT_SIZE } from '~/src/constants/values';

const StyledImage = styled(Image)`
    width: ${props => props.size || DEFAULT_ICON_BT_SIZE}px;
    height: ${props => props.size || DEFAULT_ICON_BT_SIZE}px;
`;

const IconButtonViewDefault = props => {
    const { src, ...extraProps } = props;

    return (
        <TouchableOpacity>
            <StyledImage
                source={src}
                {...extraProps}
            />
        </TouchableOpacity>
    );
};

export default IconButtonViewDefault;