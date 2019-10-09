import React from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';
import ListItem from '~/src/components/ListItem';
import RadioDetail from '~/src/components/RadioDetail';
import useController from './ControllerDefault';
import useAnimationController from './ControllerAnimation';

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
                    <Text style={{color: '#a3acbe', fontSize: 24, textAlign: 'left'}}>{title}</Text>
                    <Text style={{color: '#a3acbe', fontWeight: 'bold', fontSize: 24, textAlign: 'right'}}>{frequency}</Text>
                </ListItem>
            </TouchableOpacity>
        </>
    );
};

export default RadioItemViewDefault;