import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import ReactTestUtils from 'react-dom/test-utils';
import Sourcesearch from '../components/Sourcesearch.js';

let items = ['Country', 'Language', 'Category'];

describe('Search source dropdown button', () => {
    it('renders an empty button initially', () => {
        let y = TestUtils.renderIntoDocument(<Dropdown menuItems={items} />);
        expect(y.refs.button.getDOMNode().textContent).toEqual(''); expect(y.refs.list).toBeUndefined();
    });
    it('renders a list of options on click', () => {
        let y = TestUtils.renderIntoDocument(<Dropdown menuItems={items} />);
        TestUtils.Simulate.click(y.refs.button.getDOMNode());

        expect(y.refs.button.getDOMNode().className).toContain("active");
        expect(y.refs.list.getDOMNode()).toBeDefined();
        expect(TestUtils.scryRenderedDOMComponentsWithTag(y, "li").map(function (li) {
            return li.getDOMNode().textContent;
        })).toEqual(items);
    });
    it('updates the value when option is clicked', () => {
        let y = TestUtils.renderIntoDocument(<Dropdown menuItems={items} />);

        items.forEach(function (value, index) {
            TestUtils.Simulate.click(y.refs.button.getDOMNode());
            TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(y, 'country')[index].getDOMNode());

            expect(y.refs.list).toBeUndefined();
            expect(y.refs.button.getDOMNode().className).not.toContain("active");
            expect(y.refs.button.getDOMNode().textContent).toEqual(value);
        })
    });
})