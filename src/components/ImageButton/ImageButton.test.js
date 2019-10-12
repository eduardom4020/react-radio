import React from 'react';
import { iconSwitch } from '~/assets';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ImageButton from '~/src/components/ImageButton';

describe('ImageButton', () => {
    test('Render?', () => {
        const component = shallow(
            <ImageButton />
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
            <ImageButton size={64} />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });

    test('Render with valid tag?', () => {
        const componentObject = shallow(
            <ImageButton tag='radioDogeLogo' />
        );

        expect(toJson(
            componentObject, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });

    test('Render with invalid tag?', () => {
        const componentObject = shallow(
            <ImageButton tag={{}} />
        );

        expect(toJson(
            componentObject, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
        
        const componentBool = shallow(
            <ImageButton tag={true} />
        );

        expect(toJson(
            componentBool, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();

        const componentNumber = shallow(
            <ImageButton tag={1} />
        );

        expect(toJson(
            componentNumber, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();

        const componentString = shallow(
            <ImageButton tag='image' />
        );

        expect(toJson(
            componentString, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });
});