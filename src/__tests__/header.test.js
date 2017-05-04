import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Home from '../components/Header.js';

describe('Header Component', () => {
    it('Snapshot of Header Component', () => {
        const headers = shallow(<Header />);
        const tree = shallowToJSON(headers);
        expect(h1.getDOMNode().textContent).toEqual("THE NEWS HUB");
        expect(tree).toMatchSnapshot();
    });
});
