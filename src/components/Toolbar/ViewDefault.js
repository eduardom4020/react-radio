import styled from 'styled-components';
import { View, StatusBar } from 'react-native';

const ToolbarViewDefault = styled(View)`
    width: 100%;
    height: ${props => props.height == null ? '15%' : typeof(props.height) === 'number' ? `${props.height}px` : props.height };
    background-color: ${props => props.color || 'grey'};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: ${( StatusBar.currentHeight || 0 )}px 0 0 0;
`;

export default ToolbarViewDefault;