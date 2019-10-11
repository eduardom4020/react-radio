import React from 'react';
import { Text, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import { DARK_GREY } from '~/src/constants/colors';
import ListItem from '~/src/components/ListItem';

describe('ListItem', () => {
    test('Render?', () => {
        const component = shallow(
            <ListItem />
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
            <ListItem color={DARK_GREY} />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });

    test('Render with custom border color?', () => {
        const component = shallow(
            <ListItem borderColor={DARK_GREY} />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });
    
    test('Render with children?', () => {
        const component = shallow(
            <ListItem >
                <View><Text>Test1</Text></View>
                <Text>Test2</Text>
            </ListItem>
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });
});