import React from 'react';
import ListDetails from './listDetails';
import { shallow } from 'enzyme';

it('renders ListDetails without crashing', () => {
    const wrapper = shallow(<ListDetails />);
    expect(wrapper).toMatchSnapshot();
});




