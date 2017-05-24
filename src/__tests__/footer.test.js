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
  
  it('Should a list of items', () => {
    const expected = ['About Us', 'Help'];
    it('matches even if received contains additional elements', () => {
      expect(['About Us', 'Help', 'Contact Us']).toEqual(expect.arrayContaining(expected));
    });
  });
});