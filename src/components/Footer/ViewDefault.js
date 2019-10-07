import styled from 'styled-components';
import { View, StatusBar } from 'react-native';

const FooterViewDefault = styled(View)`
    width: 100%;
    height: ${props => props.height || StatusBar.currentHeight * 4 || 0}px;
    background-color: ${props => props.color || 'grey'};
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-top-width: 1px;
    border-top-color: #a3acbe;
`;

export default FooterViewDefault;