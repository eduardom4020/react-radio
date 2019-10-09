import React from 'react';
import { Image, Text, FlatList } from 'react-native';
import { Toolbar, RadioFooter, RadioItem, IconButton } from '~/src/components';
import useController from './ControllerDefault';
import Back from '~/assets/back-arrow.png';
import Switch from '~/assets/switch.png';

const DATA = {
    ['1']: { id: '1', title: 'Putin FM', frequency: '66,6', tag: 'radioPutinLogo' },
    ['2']: { id: '2', title: 'Dribbble FM', frequency: '101,2', tag: 'radioDribbbledLogo' },
    ['3']: { id: '3', title: 'Doge FM', frequency: '99,4', tag: 'radioDogeLogo' },
    ['4']: { id: '4', title: 'Ballads FM', frequency: '87,1', tag: 'radioBalladsLogo' },
    ['5']: { id: '5', title: 'Maximum FM', frequency: '142,2', tag: 'radioMaximumLogo' }
};

const RadioListViewDefault = props => {
    const { radio, selectRadio, clearSelection } = useController({...props, radios: DATA});

    return (
        <>
            <Toolbar color='#eeae61'>
                <IconButton src={Back} />
                <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>STATIONS</Text>
                <IconButton src={Switch} />
            </Toolbar>
            <FlatList 
                style={{
                    padding: 24,
                    paddingLeft: 24,
                    paddingRight: 24,
                    paddingBottom: 36,
                    width: '100%'
                }}
                data={Object.values(DATA)}
                renderItem={({ item, index }) => (
                    <RadioItem 
                        {...item} 
                        selectedRadio={radio}
                        onToggle={(id, isActive) => {
                            if(radio && !isActive && radio.id === id) {
                                clearSelection();
                            } else {
                                selectRadio(id);
                            }
                        }}
                        borderVisible={Object.keys(DATA).length - 1 !== index}
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