import React from 'react';
import Home from './home';
import { shallow } from 'enzyme';

it('renders Home without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
});




