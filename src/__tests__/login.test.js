import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Login from '../components/Login';

describe('Login Component', () => {
    it('Snapshot of Login Component', () => {
        const login = shallow(<Login />);
        const tree = shallowToJSON(login);
        expect(tree).toMatchSnapshot();
    });
    // it('should displays log in button', () => {
    //     const renderedComponent = shallow(<Button></Button>);
    //     expect(renderedComponent.find("button").node).toBeDefined();
    // });
    it('should display log in text in the button', () => {
        const text = 'Log in with google';
        const renderedComponent = shallow(<Button>{'LOG IN'}</Button>);
        expect(renderedComponent.contains(text)).toEqual(true);
    });
});

