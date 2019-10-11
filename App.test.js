import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '~/App';

describe('App (root)', () => {
    test('Render?', () => {
        const component = shallow(
            <App />
        );

        expect( toJson(
            component, {
                noKey: false,
                mode: 'deep'
            }
        ) ).toMatchSnapshot();
    });
});