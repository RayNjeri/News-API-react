import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import ReactTestUtils from 'react-addons-test-utils';
import Sourcesearch from '../components/Sourcesearch.js';


describe('Search source button', () => {
  it('should displays search button', () => {
    const renderedComponent = shallow(<Button></Button>);
    expect(renderedComponent.find("button").node).toBeDefined();
  });

  it('should display search text in the button', () => {
    const text = 'SEARCH';
    const renderedComponent = shallow(<Button>{'SEARCH'}</Button>);
    expect(renderedComponent.contains(text)).toEqual(true);
  });

  it('handles click', () => {
    const onClickSpy = jest.fn();
    const renderedComponent = shallow(<Button onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
