import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Articles from '../components/Articles';
import Articlesrender from '../components/Articlesrender';


 it('renders props correctly', () => {
    const wrapper = shallow(< Articles name="articles" />);
    console.log(wrapper.instance().props);
    expect(wrapper.instance().props.name).toBe('articles');
  });


