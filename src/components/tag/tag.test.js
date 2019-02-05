import React from 'react';
import Tag from './tag';
import { shallow } from 'enzyme';

it('renders Tag without crashing', () => {
    const wrapper = shallow(<Tag />)
    expect(wrapper).toMatchSnapshot();
});
