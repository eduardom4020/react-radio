import styled from 'styled-components';
import { View } from 'react-native';

const BackgroundViewDefault = styled(View)`
    width: 100%;
    height: 100%;
    background-color: ${props => props.color || 'white'};
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export default BackgroundViewDefault;