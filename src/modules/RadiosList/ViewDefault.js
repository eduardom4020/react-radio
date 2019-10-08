import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { RadioItem } from '~/src/components';

const DATA = [
    { id: '1', title: 'Putin FM', frequency: '66,6' },
    { id: '2', title: 'Dribbble FM', frequency: '101,2' },
    { id: '3', title: 'Doge FM', frequency: '99,4' },
    { id: '6', title: 'Bohemia FM', frequency: '123,4' },
    { id: '4', title: 'Ballads FM', frequency: '87,1' },
    { id: '5', title: 'Maximum FM', frequency: '142,2' }
];

const RadioListViewDefault = props => {
    return (
        <FlatList 
            style={{
                padding: 24,
                paddingLeft: 24,
                paddingRight: 24,
                paddingBottom: 24,
                width: '100%'
            }}
            data={DATA}
            renderItem={({ item, index }) => <RadioItem {...item} borderVisible={DATA.length - 1 !== index} />}
            keyExtractor={item => item.id}
        />
    );
};

export default RadioListViewDefault;