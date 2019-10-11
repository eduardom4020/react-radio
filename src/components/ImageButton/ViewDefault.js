import React from 'react';
import styled from 'styled-components';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { MEDIUM_GREY } from '~/src/constants/colors';
import { DEFAULT_IMAGE_BT_SIZE } from '~/src/constants/values';
import * as Images from '~/assets';

const StyledImage = styled(Image)`
    width: ${props => props.size || DEFAULT_IMAGE_BT_SIZE}px;
    max-height: ${props => props.size || DEFAULT_IMAGE_BT_SIZE}px;
    height: 100%;
    border-radius: ${props => props.size || DEFAULT_IMAGE_BT_SIZE / 2}px;
    border-width: 2px;
    border-color: ${props => props.borderColor || MEDIUM_GREY};
`;

const ImageButtonViewDefault = props => {
    const { onPress, tag, ...extraProps } = props;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <StyledImage 
                source={Images[tag]} 
                {...extraProps}
            />
        </TouchableWithoutFeedback>
    );
};

export default ImageButtonViewDefault;