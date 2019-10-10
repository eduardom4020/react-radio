import React from 'react';
import styled from 'styled-components';
import { Text, TouchableOpacity, Animated } from 'react-native';
import ListItem from '~/src/components/ListItem';
import RadioDetail from '~/src/components/RadioDetail';
import useController from './ControllerDefault';
import useAnimationController from './ControllerAnimation';
import { MEDIUM_GREY } from '~/src/constants/colors';

const StyledText = styled(Text)`
    color: ${props => props.color || MEDIUM_GREY};
    font-size: 24px;
    text-align: ${props => props.toRight ? 'right' : 'left'};
    fontWeight: ${props => props.bold ? 'bold' : 'normal'};
`;

const RadioItemViewDefault = props => {
    const { title='Some Radio', frequency='111,11', tag, ...extraProps } = props;
    const { isActive, toggle } = useController(props);
    const { linearGrow } = useAnimationController({ shouldExpand: isActive });
    
    const height = linearGrow(0, 216);

    return (
        <>
            {
                <Animated.View style={{width: '100%', height}} >
                    <RadioDetail imageTag={tag} onTouchImage={toggle}/>
                </Animated.View>
            }
            <TouchableOpacity onPress={toggle}>
                <ListItem color='transparent' {...extraProps} >
                    <StyledText>{title}</StyledText>
                    <StyledText toRight bold>{frequency}</StyledText>
                </ListItem>
            </TouchableOpacity>
        </>
    );
};

export default RadioItemViewDefault;