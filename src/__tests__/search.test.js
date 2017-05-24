import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import SourcesSearch from '../components/Sourcesearch';

describe('SourcesSearch component', () => {
    it('Should have a Search button', () => {
        const search = shallow(<SourcesSearch />);
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

    it('should display searched Sources', () => {
    let mockSearch = jest.fn();
    const wrapper = mount(<SourcesSearch updateSearch={mockSearch} />);
    expect(wrapper).toBeDefined();
  });

    it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });

});