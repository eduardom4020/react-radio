import React from 'react';
import { Text, View } from 'react-native';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { DARK_GREY } from '~/src/constants/colors';
import Footer from '~/src/components/Footer';

describe('Footer', () => {
    test('Render?', () => {
        const component = shallow(
            <Footer />
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
            <Footer color={DARK_GREY} />
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
            <Footer height={200} />
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
            <Footer color={DARK_GREY} >
                <View><Text>Test1</Text></View>
                <Text>Test2</Text>
            </Footer>
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });
});