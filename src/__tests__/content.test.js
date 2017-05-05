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
    it('should displays search and log in buttons', () => {
        const renderedComponent = shallow(<Button></Button>);
        expect(renderedComponent.find("button").node).toBeDefined();
    });
    it('should dispay search and log in texts in the buttons', () => {
        const text = 'LOG IN';
        const text1 = 'SEARCH';
        const renderedComponent = shallow(<Button>{'LOG IN'}</Button>, <Button>{'SEARCH'}</Button>)
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
            let x = TestUtils.renderIntoDocument(<Dropdown menuItems={items} />);
            expect(y.refs.button.getDOMNode().textContent).toEqual(''); expect(x.refs.list).toBeUndefined();
        });
        it('renders a list of options on click', () => {
            TestUtils.Simulate.click(x.refs.button.getDOMNode());
            expect(x.refs.button.getDOMNode().className).toContain("active");
            expect(x.refs.list.getDOMNode()).toBeDefined();
            expect(TestUtils.scryRenderedDOMComponentsWithTag(x, "li").map(function (li) {
                return li.getDOMNode().textContent;
            })).toEqual(items);
        }),
            it('updates the value when option is clicked', () => {
                items.forEach(function (value, index) {
                    TestUtils.Simulate.click(y.refs.button.getDOMNode());
                    TestUtils.Simulate.click(TestUtils.scryRenderedDOMComponentsWithTag(y, 'top')[index].getDOMNode())
                    expect(x.refs.list).toBeUndefined();
                    expect(x.refs.button.getDOMNode().className).not.toContain("trending");
                    expect(x.refs.button.getDOMNode().textContent).toEqual(value);
                })
            });
    }),
        describe('the articles header', () => {
            it('Snapshot of articles Header Component', () => {
                const headers = shallow(<Header />);
                const tree = shallowToJSON(headers);
                expect(h3.getDOMNode().textContent).toEqual("Articles");
                expect(tree).toMatchSnapshot();
            })
        })
})    
