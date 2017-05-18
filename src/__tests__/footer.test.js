import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Footer from '../components/Footer';

describe('Home Component', () => {
  it('Should render a footer items', () => {
    const footer = shallow(<Footer />);
    const tree = shallowToJSON(footer);
    expect(tree).toMatchSnapshot();
  });
});