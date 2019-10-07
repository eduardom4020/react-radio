import styled from 'styled-components';
import { View, StatusBar } from 'react-native';

const ToolbarViewDefault = styled(View)`
    width: 100%;
    height: ${props => props.height || StatusBar.currentHeight * 3 || 0}px;
    background-color: ${props => props.color || 'aliceblue'};
    justify-content: space-around;
    align-items: center;
`;

export default ToolbarViewDefault;