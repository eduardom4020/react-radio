import React from 'react';
import { iconSwitch } from '~/assets';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import IconButton from '~/src/components/IconButton';

describe('IconButton', () => {
    test('Render?', () => {
        const component = shallow(
            <IconButton />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });

    test('Render with custom size?', () => {
        const component = shallow(
            <IconButton size={64} />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });

    test('Render with image from assets?', () => {
        const component = shallow(
            <IconButton src={iconSwitch} />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });

    test('Render with invalid image source type?', () => {
        const componentObject = shallow(
            <IconButton src={{}} />
        );

        expect(toJson(
            componentObject, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
        
        const componentBool = shallow(
            <IconButton src={true} />
        );

        expect(toJson(
            componentBool, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();

        const componentNumber = shallow(
            <IconButton src={1} />
        );

        expect(toJson(
            componentNumber, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();

        const componentString = shallow(
            <IconButton src='image' />
        );

        expect(toJson(
            componentString, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });
});