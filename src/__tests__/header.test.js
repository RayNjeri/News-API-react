import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Header from '../components/Header.js';

describe('Header Component', () => {
    it('Snapshot of Header Component', () => {
        const headers = shallow(<Header />);
        // console.log(headers.debug());
        const tree = shallowToJSON(headers);
        expect(headers.containsMatchingElement(<h1>THE NEWS HUB.</h1>)).toBe(true);
        // expect(headers.containsMatchingElement(<h1 />)).toBe(true)
        expect(tree).toMatchSnapshot();
    });
});
