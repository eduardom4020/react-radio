import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { ListItem } from '~/src/components';

const RadioItemViewDefault = props => {
    const { title='Some Radio', frequency='111,11' } = props;
    
    return (
        <ListItem color='transparent'>
            <Text style={{color: '#a3acbe', fontSize: 18, textAlign: 'left'}}>{title}</Text>
            <Text style={{color: '#a3acbe', fontWeight: 'bold', fontSize: 18, textAlign: 'right'}}>{frequency}</Text>
        </ListItem>
    );
};

export default RadioItemViewDefault;