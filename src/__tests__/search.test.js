import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import ReactTestUtils from 'react-dom/test-utils';
import Search from '../components/Sourcesearch';

describe('Search component', () => {
    it('Should have a search button', () => {
        const search = shallow(<Search />);
        const tree = shallowToJSON(search);
        expect(tree).toMatchSnapshot();
    });
    it("trigger onSearch correctly", () => {
        const handleSearch = jest.fn();
    });
});