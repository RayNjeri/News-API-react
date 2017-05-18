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
  describe('Search source dropdown select button', () => {
    it('renders a list of options on click', () => {
      TestUtils.Simulate.click(select.refs.button.getDOMNode());
      expect(search.refs.button.getDOMNode().className).toContain("country");
      expect(search.refs.list.getDOMNode()).toBeDefined();
      expect(TestUtils.scryRenderedDOMComponentsWithTag(select, "li").map(function (li) {
        return li.getDOMNode().textContent;
      })).toEqual(items);
    });
  });
  it('updates the value when option is clicked', () => {
    items.forEach(function (value, index) {
      TestUtils.Simulate.click(search.refs.button.getDOMNode());
      TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(search, '')[index].getDOMNode());
      expect(search.refs.list).toBeUndefined();
      expect(search.refs.button.getDOMNode().className).not.toContain("trending");
      expect(search.refs.button.getDOMNode().textContent).toEqual(value);
    });
  });
});