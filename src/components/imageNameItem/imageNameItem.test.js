import React from 'react';
import { ImageNameItem } from './imageNameItem';
import { shallow } from 'enzyme';

it('renders ImageNameItem without crashing', () => {
    const props = {
        name: 'test',
        images: []
    };
    const wrapper = shallow(<ImageNameItem {...props} />);
    expect(wrapper).toMatchSnapshot();
});




