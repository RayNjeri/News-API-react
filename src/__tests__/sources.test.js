import React from 'react';
import { mount, shallow, wrapper } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import ReactTestUtils from 'react-dom/test-utils';
import Sources from '../components/Sources';

let items = ['country', 'language', 'category'];

describe('Sources components', () => {
  beforeEach, () => {
    this.exampleSources = [
      { id: 1, name: "ABC News(AU)" },
      { id: 2, name: "Al Jazeera English" }
    ];
  };
  it('snapshot for  Sources component', () => {
    const component = shallow(<Sources data={[]} />);
    const tree = shallowToJSON(component);
    expect(tree).toMatchSnapshot();
  });
});
