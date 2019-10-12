import React from 'react';
import styled from 'styled-components';
import { iconBack, iconSwitch } from '~/src/assets';
import { Text } from 'react-native';
import Toolbar from '~/src/components/Toolbar';
import IconButton from '~/src/components/IconButton';

const StyledText = styled(Text)`
    color: white;
    font-size: 24px;
    font-weight: bold;
`;

const RadioToolbarViewDefault = props => {
    const { iconStyle, textStyle, title, ...extraProps } = props;

    return (
        <Toolbar {...extraProps} >
            <IconButton src={iconBack} style={iconStyle} />
            <StyledText style={textStyle}>{title}</StyledText>
            <IconButton src={iconSwitch} style={iconStyle} />
        </Toolbar>
    );
};

export default RadioToolbarViewDefault;