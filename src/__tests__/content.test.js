import React from 'react';
import shallowToJSON from 'enzyme-to-json';
import { mount, shallow, wrapper } from 'enzyme';
import Content from '../components/Content.js';
import Articles from '../components/Articles';

describe('Content component', () => {
  it('Should have all the contents information', () => {
    const contents = shallow(<Content />);
    const tree = shallowToJSON(contents);
    expect(tree).toMatchSnapshot();
  });

   it('renders props correctly', () => {
    const wrapper = shallow(<Content name="renderArticles" />);
    expect(wrapper.instance().props.name).toBe('renderArticles');
  });

  it('should display Articles', () => {
    let mockDisplay = jest.fn();
    const wrapper = mount(<Content renderArticles={mockDisplay} />);
    expect(wrapper).toBeDefined();
  });

   it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
});    
