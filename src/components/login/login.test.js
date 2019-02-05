import React from 'react';
import Login from './login';
import { shallow } from 'enzyme';

it('renders Login without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
});




