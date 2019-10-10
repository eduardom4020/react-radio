import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { iconMinus, iconPlus } from '~/assets';
import { MEDIUM_GREY } from '~/src/constants/colors';
import IconButton from '~/src/components/IconButton';
import ImageButton from '~/src/components/ImageButton';

const StyledView = styled(View)`
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
`;

const RadioDetailViewDefault = props => {
    const { imageTag='', onTouchImage, style } = props;

    return (
        <StyledView style={style} >
            <IconButton src={iconMinus} size={32} tintColor={MEDIUM_GREY}/>
            <ImageButton onPress={onTouchImage} tag={imageTag} />
            <IconButton src={iconPlus} size={32} tintColor={MEDIUM_GREY}/>
        </StyledView>
    );
};

export default RadioDetailViewDefault;