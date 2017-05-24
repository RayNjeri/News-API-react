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
  wrapper.setState({sources: mockSources});
  wrapper.update();
  const sources = wrapper.find('.card-block');
  expect(sources.length).toBeGreaterThanOrEqual(1);
});

  it('handles changing filter key', () => {
    const name = 'filterKey';
    const value = 'country';
    const wrapper = shallow(<Sources />);
    const select = wrapper.find(`select[name='${name}']`).first();
    // simulate change with event
    const event = {
      target: {name, value}
    };
    select.simulate('change', event);
    // read state
    const state = wrapper.state();
    // assert state.currentFilter has same filter as in event.
    expect(state.currentFilter.filterKey).toEqual(value);
  });

  it('handles changing filter value', () =>{
    const name = 'filterValue';
    const value = 'business';
    const wrapper = shallow(<Sources />);
    const select = wrapper.find(`select[name='${name}']`).first();
    const event = {
      target: {name, value}
    };
    select.simulate('change', event);
    const state = wrapper.state();
    expect(state.currentFilter.filterValue).toEqual(value);
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
    expect(wrapper.instance().props.name).toBe('sources');
  });

  it('check for presence of div elements', () => {
    const wrapper = shallow(<div></div>);
    expect(wrapper.find('div').node).toBeDefined();
  });

});
