import React from 'react';
import TypeFilter from './typeFilter';
import { shallow } from 'enzyme';

it('renders TypeFilter without crashing', () => {
    const wrapper = shallow(<TypeFilter />)
    expect(wrapper).toMatchSnapshot();
});