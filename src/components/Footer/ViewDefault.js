import styled from 'styled-components';
import { View, StatusBar } from 'react-native';
import { MEDIUM_GREY } from '~/src/constants/colors';

const FooterViewDefault = styled(View)`
    width: 100%;
    height: ${props => props.height || StatusBar.currentHeight * 5 || 0}px;
    background-color: ${props => props.color || 'grey'};
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-top-width: 1px;
    border-top-color: ${props => props.borderColor || MEDIUM_GREY};
`;

export default FooterViewDefault;