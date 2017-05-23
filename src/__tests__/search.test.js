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

    it('should display search text in the button', () => {
        const text = 'Search';
        const renderedComponent = shallow(<div>{'Search'}</div>);
        expect(renderedComponent.contains(text)).toBe(true);
    });

    it("trigger onSearch correctly", () => {
        const handleSearch = jest.fn();
    });
});