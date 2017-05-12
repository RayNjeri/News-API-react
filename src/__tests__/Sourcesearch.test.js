import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import ReactTestUtils from 'react-addons-test-utils';
import Sourcesearch from '../components/Sourcesearch.js';

let items = ['Country', 'Language', 'Category'];

describe('Search source dropdown button', () => {
    it('renders an empty button initially', () => {
        let dropdown = TestUtils.renderIntoDocument(<Dropdown menuItems={items} />);
        expect(dropdown.refs.button.getDOMNode().textContent).toEqual(''); expect(dropdown.refs.list).toBeUndefined();
    });
    it('renders a list of options on click', () => {
        let dropdown = TestUtils.renderIntoDocument(<Dropdown menuItems={items} />);
        TestUtils.Simulate.click(dropdown.refs.button.getDOMNode());

        expect(dropdown.refs.button.getDOMNode().className).toContain("Country");
        expect(dropdown.refs.list.getDOMNode()).toBeDefined();
        expect(TestUtils.scryRenderedDOMComponentsWithTag(dropdown, "li").map(function (li) {
            return li.getDOMNode().textContent;
        })).toEqual(items);
    });
    it('updates the value when option is clicked', () => {
        let dropdown = TestUtils.renderIntoDocument(<Dropdown menuItems={items} />);

        items.forEach(function (value, index) {
            TestUtils.Simulate.click(dropdown.refs.button.getDOMNode());
            TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(dropdown, 'country')[index].getDOMNode());

            expect(dropdown.refs.list).toBeUndefined();
            expect(dropdown.refs.button.getDOMNode().className).not.toContain("active");
            expect(dropdown.refs.button.getDOMNode().textContent).toEqual(value);
        })
    });
})