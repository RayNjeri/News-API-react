import React from 'react';
import React from 'react-addons';
import ReactTestUtils from 'react-dom/test-utils';
import { mount, shallow, wrapper } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Sources from '../components/Sources.js';

describe('Sources components', () => {
    beforeEach, () => {
        this.exampleSources = [
            { id: 1, name: "ABC News(AU)" },
            { id: 2, name: "Al Jazeera English" }
        ];
    };
    it('snapshot for sources component', () => {
        const component = shallow(<Sources data={[]} />);
        const tree = shallowToJSON(component);
        expect(tree).toMatchSnapshot();
    });
    it('renders a list of available news sources', () => {
        let y = TestUtils.renderIntoDocument(<this.state.sources.map />);
        expect(y.refs.getDOMNode().textContent).toEqual(''); expect(y.refs.list).toBeUndefined();
    });

}
