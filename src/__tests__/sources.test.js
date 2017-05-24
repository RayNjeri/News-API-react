import React from 'react';
import { mount, shallow, wrapper } from 'enzyme';
import shallowToJSON from 'enzyme-to-json';
import Sources from '../components/Sources';

const mockSources = {sources: [
    {
      "id": "abc-news-au",
      "name": "ABC News (AU)",
      "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      "url": "http://www.abc.net.au/news",
      "category": "general",
      "language": "en",
      "country": "au",
      "urlsToLogos": {
        "small": "",
        "medium": "",
        "large": ""
      },
      "sortBysAvailable": [
        "top"
      ]},]};


describe('Sources components', () => {
  beforeEach, () => {
    this.exampleSources = [
      { id: 1, name: "ABC News(AU)" },
      { id: 2, name: "Al Jazeera English" }
    ];
  };

  it('the array should have more than one source', () => {
  const wrapper = mount(<Sources />);
  wrapper.setState(mockSources);
  wrapper.update();
  const sources = wrapper.find('.card-block');
  console.log(wrapper.find('.col-md-10'));
  expect(sources.length).toBeGreaterThanOrEqual(1);
  });

  it('snapshot for  Sources component', () => {
    const component = shallow(<Sources data={[]} />);
    const tree = shallowToJSON(component);
    expect(tree).toMatchSnapshot();
  });

  it('should display Sources', () => {
    let mockDisplay = jest.fn();
    const wrapper = mount(<Sources displaySources={mockDisplay} />);
    expect(wrapper).toBeDefined();
  });

  it('renders props correctly', () => {
    const wrapper = shallow(<Sources name="sources" />);
    console.log(wrapper.instance().props);
    expect(wrapper.instance().props.name).toBe('sources');
  });

  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });

});
