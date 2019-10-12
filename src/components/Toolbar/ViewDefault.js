import styled from 'styled-components';
import { View } from 'react-native';
import { MEDIUM_GREY } from '~/src/constants/colors';

const ToolbarViewDefault = styled(View)`
    width: 100%;
    height: ${props => props.height == null ? '15%' : typeof(props.height) === 'number' ? `${props.height}px` : props.height };
    background-color: ${props => props.color || MEDIUM_GREY};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export default ToolbarViewDefault;