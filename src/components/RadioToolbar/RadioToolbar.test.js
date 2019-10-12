import React from 'react';
import { Text, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DARK_GREY } from '~/src/constants/colors';
import RadioToolbar from '~/src/components/RadioToolbar';

describe('RadioToolbar', () => {
    test('Render?', () => {
        const component = shallow(
            <RadioToolbar />
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
            <RadioToolbar color={DARK_GREY} />
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
            <RadioToolbar height={200} />
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
            <RadioToolbar title='Radios App' />
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
            <RadioToolbar radioTitle={
                <View><Text>Radios Toolbar</Text></View>
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