import styled from 'styled-components';
import { View, StatusBar } from 'react-native';

const ToolbarViewDefault = styled(View)`
    width: 100%;
    height: ${props => props.height || StatusBar.currentHeight * 4 || 0}px;
    background-color: ${props => props.color || 'yellow'};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: ${( StatusBar.currentHeight || 0 )}px 0 0 0;
`;

export default ToolbarViewDefault;