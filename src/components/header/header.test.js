import React from 'react';
import Header from './header';
import { shallow } from 'enzyme';

it('renders Header without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
});




