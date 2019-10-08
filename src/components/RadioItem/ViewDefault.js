import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ListItem from '~/src/components/ListItem';
import RadioDetail from '~/src/components/RadioDetail';
import useController from './ControllerDefault'; 

const RadioItemViewDefault = props => {
    const { title='Some Radio', frequency='111,11', ...extraProps } = props;
    const { isActive, toggle } = useController(props);
    
    return (
        <TouchableOpacity onPress={toggle}>
            <ListItem color='transparent' {...extraProps} >
                {
                    isActive &&
                        <View style={{width: '100%', marginTop: 36}} >
                            <RadioDetail />
                        </View>
                }
                <Text style={{color: '#a3acbe', fontSize: 24, textAlign: 'left'}}>{title}</Text>
                <Text style={{color: '#a3acbe', fontWeight: 'bold', fontSize: 24, textAlign: 'right'}}>{frequency}</Text>
            </ListItem>
        </TouchableOpacity>
    );
};

export default RadioItemViewDefault;