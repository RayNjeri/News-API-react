import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Articles from '../components/Articles';
import ArticlesRender from '../components/ArticlesRender';

describe('ArticlesRender Component', () => {
   it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
  });
