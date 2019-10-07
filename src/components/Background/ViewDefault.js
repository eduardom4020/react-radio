import styled from 'styled-components';
import { View, StatusBar } from 'react-native';

const BackgroundViewDefault = styled(View)`
    width: 100%;
    height: 100%;
    background-color: ${props => props.color || 'white'};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.statusBarHeight || StatusBar.currentHeight || 0}px 0 0 0;
`;

export default BackgroundViewDefault;