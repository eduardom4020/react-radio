import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RadiosList from '~/src/modules/RadiosList';

describe('RadiosList', () => {
    test('Render?', () => {
        const component = shallow(
            <RadiosList />
        );

        expect(toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        )).toMatchSnapshot();
    });
    
    test('Render with empty data provided?', () => {
        const component = shallow(
            <RadiosList radios={{}} />
        );

        expect(component.props().children[1].props.data).toMatchObject([]);
    });

    test('Render with different type of data?', () => {
        const componentBool = shallow(
            <RadiosList radios={true} />
        );

        expect(componentBool.props().children[1].props.data).toMatchObject([]);

        const componentString = shallow(
            <RadiosList radios={'some radio'} />
        );

        expect(componentString.props().children[1].props.data).toMatchObject([]);

        const componentArray = shallow(
            <RadiosList radios={[{id: 'radio1', title: 'Radio 1 FM', frequency: '1,0', tag: 'radioMaximumLogo'}]} />
        );

        expect(componentArray.props().children[1].props.data).toMatchObject([]);
    });

    test('Overrides default data with new one?', () => {
        const RADIOS = {
            radio1: {id: 'radio1', title: 'Radio 1 FM', frequency: '1,0', tag: 'radioMaximumLogo'},
            radio2: {id: 'radio2', title: 'Radio 2 FM', frequency: '2,0', tag: 'radioMaximumLogo'},
            radio3: {id: 'radio3', title: 'Radio 3 FM', frequency: '3,0', tag: 'radioMaximumLogo'}
        };

        const component = shallow(
            <RadiosList 
                radios={RADIOS}
            />
        );
        
        expect(component.props().children[1].props.data).toMatchObject(Object.values(RADIOS));
    });
});