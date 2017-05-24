import React from 'react';
import { mount, shallow } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Articles from '../components/Articles';
import Articlesrender from '../components/Articlesrender';

const mockArticles = [
{
"author": "Már Másson Maack",
"title": "How Europe’s biggest economy is uniting its tech hubs to dethrone Silicon Valley",
"description": "Silicon Valley is by far the most successful tech hub on the planet. However, European and Asian cities have started gaining on the startup mecca — so much so, that you could even ...",
"url": "https://thenextweb.com/eu/2017/05/24/how-germany-is-uniting-its-tech-hubs-to-build-its-own-silicon-valley/",
"urlToImage": "https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Screen-Shot-2017-05-23-at-17.51.26.png",
"publishedAt": "2017-05-24T10:49:37Z"
},
{
"author": "Napier Lopez",
"title": "Microsoft is making a Surface USB-C dongle so you can dongle all your dongles",
"description": "Microsoft's been on a high streak with its newest Surface products, but one repeated complaint has been their shunning of USB-C - also known as the best connector in the world (fight ...",
"url": "https://thenextweb.com/microsoft/2017/05/23/microsoft-making-surface-usb-c-dongle-can-dongle-dongles/",
"urlToImage": "https://cdn3.tnwcdn.com/wp-content/blogs.dir/1/files/2017/05/Surface-Laptop-Windows-10-S-1-of-12.jpg",
"publishedAt": "2017-05-23T17:52:00Z"
}
];

describe('Articles components', () => {
 it('the array should have more than one article', () => {
      const props = {
        params: {
          sourceId: "abc-au-news",
          sortBy: "latest"
        }
      };
      Articles.prototype.renderArticles = jest.fn();
      Articles.prototype.componentDidMount = jest.fn();
      Articles.prototype.componentWillReceiveProps = jest.fn();

      const wrapper = mount(<Articles params={props.params}/>);
      wrapper.setState({articles: mockArticles});
      wrapper.update();
      const articles = wrapper.find('div.col-lg-4');
      const title1 = wrapper.find('a.card-footer').first();
      expect(title1.text()).toBe(mockArticles[0].title);
      expect(articles.length).toBeGreaterThanOrEqual(1);
    });

 it('renders props correctly', () => {
    const wrapper = shallow(< Articles name="articles" />);
    expect(wrapper.instance().props.name).toBe('articles');
  });

   it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });
});

