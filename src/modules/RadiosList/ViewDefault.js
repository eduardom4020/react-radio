import React from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { RadioFooter, RadioItem, RadioToolbar } from '~/src/components';
import { MEDIUM_ORANGE, METALIC_BLACK } from '~/src/constants/colors';
import { APP_TITLE } from '~/src/constants/texts';
import useController from './ControllerDefault';
import DATA from '~/src/data/radios-data.json';

const StyledList = styled(FlatList)`
    padding: 24px 24px 32px 24px;
    width: 100%;
`;

const RadioListViewDefault = props => {
    const { radios: Radios, ...extraProps } = props;
    const radios = Radios || DATA;

    const { dataValues, radio, selectRadio, clearSelection, ref } = useController({...extraProps, radios});

    return (
        <>
            <RadioToolbar 
                color={MEDIUM_ORANGE}
                title={APP_TITLE}
                style={{paddingTop: 24}}
            />
            <StyledList
                ref={ref}
                data={dataValues}
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
                color={METALIC_BLACK}
                radioTitle={radio && radio.title}
            />
        </>
    );
};

export default RadioListViewDefault;