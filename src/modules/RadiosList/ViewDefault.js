import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { RadioItem } from '~/src/components';

const RadioListViewDefault = props => {
    return (
        <FlatList 
            style={{
                // marginTop: '20%',
                width: '90%',
                // height: '100%',
                // padding: '0 16px 0 16px'
            }}
            data={[
                { id: '1', title: 'Putin FM', frequency: '66,6' },
                { id: '2', title: 'Dribble FM', frequency: '101,2' },
                { id: '3', title: 'Doge FM', frequency: '99,4' },
                { id: '4', title: 'Ballads FM', frequency: '87,1' },
                { id: '5', title: 'Maximum FM', frequency: '142,2' }
            ]}
            renderItem={({ item }) => <RadioItem {...item} />}
            keyExtractor={item => item.id}
        />
    );
};

export default RadioListViewDefault;