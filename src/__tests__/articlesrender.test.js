import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Articlesrender from '../components/Articlesrender';

describe('Articles Component', () => {
  it('Snapshot of Articles Component', () => {
    const articles = shallow(<Articlesrender />);
    const tree = shallowToJSON(articles);
    expect(articles.containsMatchingElement(<h3>Articles</h3>)).toBe(true);
    expect(tree).toMatchSnapshot();
  });
  });
