import React from 'react';
import Favorite from './favorite';
import { shallow } from 'enzyme';

it('renders Favorite without crashing', () => {
    const wrapper = shallow(<Favorite />)
    expect(wrapper).toMatchSnapshot();
});
