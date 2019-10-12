import React from 'react';
import { iconSwitch } from '~/assets';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RadioDetail from '~/src/components/RadioDetail';

describe('RadioDetail', () => {
    test('Render?', () => {
        const component = shallow(
            <RadioDetail />
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
            <RadioDetail imageTag='radioDogeLogo' />
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
            <RadioDetail imageTag={{}} />
        );

        expect(toJson(
            componentObject, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
        
        const componentBool = shallow(
            <RadioDetail imageTag={true} />
        );

        expect(toJson(
            componentBool, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();

        const componentNumber = shallow(
            <RadioDetail imageTag={1} />
        );

        expect(toJson(
            componentNumber, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();

        const componentString = shallow(
            <RadioDetail imageTag='image' />
        );

        expect(toJson(
            componentString, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });
});