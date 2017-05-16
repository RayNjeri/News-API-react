import React from 'react';
import shallowToJSON from 'enzyme-to-json';
import { mount, shallow, wrapper } from 'enzyme';
import Content from '../components/Content.js';

describe('Content component', () => {
    it('Should have all the contents information', () => {
        const contents = shallow(<Content />);
        const tree = shallowToJSON(contents);
        expect(tree).toMatchSnapshot();
    });
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
    it('should displays log in button', () => {
        const renderedComponent = shallow(<Button></Button>);
        expect(renderedComponent.find("button").node).toBeDefined();
    });
    it('should display log in text in the button', () => {
        const text = 'LOG IN';
        const renderedComponent = shallow(<Button>{'LOG IN'}</Button>);
        expect(renderedComponent.contains(text)).toEqual(true);
    });
    it('handles click', () => {
        const onClickSpy = jest.fn();
        const renderedComponent = shallow(<Button onClick={onClickSpy} />);
        renderedComponent.find('button').simulate('click');
        expect(onClickSpy).toHaveBeenCalled();
    });

    let items = ['Top', 'Latest', 'Popular'];

    describe('Search source dropdown button', () => {
        it('renders an empty button initially', () => {
            let search = TestUtils.renderIntoDocument(<Dropdown menuItems={items} />);
            expect(search.refs.button.getDOMNode().textContent).toEqual(''); expect(search.refs.list).toBeUndefined();
        });
        it('renders a list of options on click', () => {
            TestUtils.Simulate.click(search.refs.button.getDOMNode());
            expect(search.refs.button.getDOMNode().className).toContain("Top");
            expect(search.refs.list.getDOMNode()).toBeDefined();
            expect(TestUtils.scryRenderedDOMComponentsWithTag(search, "li").map(function (li) {
                return li.getDOMNode().textContent;
            })).toEqual(items);
        }),
            it('updates the value when option is clicked', () => {
                items.forEach(function (value, index) {
                    TestUtils.Simulate.click(search.refs.button.getDOMNode());
                    TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(search, 'top')[index].getDOMNode());
                    expect(search.refs.list).toBeUndefined();
                    expect(search.refs.button.getDOMNode().className).not.toContain("trending");
                    expect(search.refs.button.getDOMNode().textContent).toEqual(value);
                });
            });
    }),
        describe('the articles header', () => {
            it('Snapshot of articles Header Component', () => {
                const headers = shallow(<Header />);
                const tree = shallowToJSON(headers);
                expect(h3.getDOMNode().textContent).toEqual("Articles");
                expect(tree).toMatchSnapshot();
            });
        });
});    
