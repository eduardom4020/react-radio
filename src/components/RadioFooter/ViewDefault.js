import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import Footer from '~/src/components/Footer';
import { MEDIUM_GREY, MEDIUM_ORANGE } from '~/src/constants/colors';
import { DEFAULT_RADIO_PLAYING } from '~/src/constants/values';

const Header = styled(Text)`
    color: ${props => props.color || MEDIUM_ORANGE};
    font-size: 12px;
    font-weight: bold;
`;

const Value = styled(Text)`
    color: ${props => props.color || MEDIUM_GREY};
    font-size: 32px;
`;

const RadioFooterViewDefault = props => {
    const { radioTitle, headerStyle, titleStyle } = props;

    return (
        <Footer {...props} >
            {
                radioTitle &&
                    <>
                        <Header style={headerStyle}>{DEFAULT_RADIO_PLAYING}</Header>
                        <Value style={titleStyle}>{radioTitle}</Value>
                    </>
            }
        </Footer>
    );  
};

export default RadioFooterViewDefault;