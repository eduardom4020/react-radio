import React from 'react';
import styled from 'styled-components';
import { iconBack, iconSwitch } from '~/assets';
import { Text } from 'react-native';
import Toolbar from '~/src/components/Toolbar';
import IconButton from '~/src/components/IconButton';

const StyledText = styled(Text)`
    color: white;
    font-size: 24px;
    font-weight: bold;
`;

const RadioToolbarViewDefault = props => {
    const { iconStyle, textStyle, color, title } = props;

    return (
        <Toolbar color={color}>
            <IconButton src={iconBack} style={iconStyle} />
            <StyledText style={textStyle}>{title}</StyledText>
            <IconButton src={iconSwitch} style={iconStyle} />
        </Toolbar>
    );
};

export default RadioToolbarViewDefault;