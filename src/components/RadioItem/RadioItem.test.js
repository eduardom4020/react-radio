import React from 'react';
import { Text, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DARK_GREY } from '~/src/constants/colors';
import RadioItem from '~/src/components/RadioItem';

describe('RadioToolbar', () => {
    test('Render?', () => {
        const component = shallow(
            <RadioItem />
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
            <RadioItem color={DARK_GREY} />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });

    
});