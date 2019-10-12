import React from 'react';
import { Text, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DARK_GREY } from '~/src/constants/colors';
import RadioFooter from '~/src/components/RadioFooter';

describe('RadioFooter', () => {
    test('Render?', () => {
        const component = shallow(
            <RadioFooter />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });

    test('Render with custom color?', () => {
        const component = shallow(
            <RadioFooter color={DARK_GREY} />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });

    test('Render with custom height?', () => {
        const component = shallow(
            <RadioFooter height={200} />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });
    
    test('Render with string title?', () => {
        const component = shallow(
            <RadioFooter radioTitle='Doge FM' />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });

    test('Render with component title?', () => {
        const component = shallow(
            <RadioFooter radioTitle={
                <View><Text>Doge FM</Text></View>
            } />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });
});