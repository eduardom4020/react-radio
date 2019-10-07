import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import ListItem from '~/src/components/ListItem';

const RadioItemViewDefault = props => {
    const { title='Some Radio', frequency='111,11', ...extraProps } = props;
    
    return (
        <ListItem color='transparent' {...extraProps} >
            <Text style={{color: '#a3acbe', fontSize: 24, textAlign: 'left'}}>{title}</Text>
            <Text style={{color: '#a3acbe', fontWeight: 'bold', fontSize: 24, textAlign: 'right'}}>{frequency}</Text>
        </ListItem>
    );
};

export default RadioItemViewDefault;