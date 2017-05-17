import React from 'react';
import shallowToJSON from 'enzyme-to-json';
import { mount, shallow, wrapper } from 'enzyme';
import Content from '../components/Content.js';
import Articles from '../components/Articles';

describe('Content component', () => {
    it('Should have all the contents information', () => {
        const contents = shallow(<Content />);
        const tree = shallowToJSON(contents);
        expect(tree).toMatchSnapshot();
    });
});    
