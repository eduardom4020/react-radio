import styled from 'styled-components';
import { View } from 'react-native';
import { MEDIUM_GREY } from '~/src/constants/colors';

const ListItemViewDefault = styled(View)`
    width: 100%;
    min-height: 82px;
    background-color: ${props => props.color || 'white'};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-style: solid;
    border-bottom-width: ${props => props.borderVisible === false ? 0 : 1}px;
    border-bottom-color: ${props => props.borderColor || MEDIUM_GREY};
`;

export default ListItemViewDefault;