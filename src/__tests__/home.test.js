import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Home from '../components/Home';

describe('Home Component', () => {
    it('Should render a home page', () => {
        const homes = shallow(<Home />);
        const tree = shallowToJSON(homes);
        expect(tree).toMatchSnapshot();
    });
    it('should render header div class', () => {
        const header = shallow(<Home />);
        expect(header.find('Header')).toEqual.defined;
    });

});