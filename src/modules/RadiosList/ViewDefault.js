import React from 'react';
import { Image, Text, FlatList } from 'react-native';
import { Toolbar, RadioFooter, RadioItem } from '~/src/components';
import useController from './ControllerDefault';

const DATA = {
    ['1']: { id: '1', title: 'Putin FM', frequency: '66,6' },
    ['2']: { id: '2', title: 'Dribbble FM', frequency: '101,2' },
    ['3']: { id: '3', title: 'Doge FM', frequency: '99,4' },
    ['6']: { id: '6', title: 'Bohemia FM', frequency: '123,4' },
    ['4']: { id: '4', title: 'Ballads FM', frequency: '87,1' },
    ['5']: { id: '5', title: 'Maximum FM', frequency: '142,2' }
};

const RadioListViewDefault = props => {
    const { radio, selectRadio, clearSelection } = useController({...props, radios: DATA});

    return (
        <>
            <Toolbar color='#eeae61'>
                <Image source={require('~/assets/back-arrow.png')} style={{width: 24, height: 24}}/>
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>STATIONS</Text>
                <Image source={require('~/assets/switch.png')} style={{width: 24, height: 24}}/>
            </Toolbar>
            <FlatList 
                style={{
                    padding: 24,
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingBottom: 24,
                    width: '100%'
                }}
                data={Object.values(DATA)}
                renderItem={({ item, index }) => (
                    <RadioItem 
                        {...item} 
                        selectedRadio={radio}
                        borderVisible={DATA.length - 1 !== index}
                        onToggle={(id, isActive) => {
                            if(radio && !isActive && radio.id === id) {
                                clearSelection();
                            } else {
                                selectRadio(id);
                            }
                        }}
                    />
                )}
                keyExtractor={item => item.id}
            />
            <RadioFooter 
                color='#191313'
                radioTitle={radio && radio.title}
            />
        </>
    );
};

export default RadioListViewDefault;