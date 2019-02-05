import React from 'react';
import ListHeader from './listHeader';
import { shallow } from 'enzyme';

it('renders ListHeader without crashing', () => {
    const wrapper = shallow(<ListHeader />)
    expect(wrapper).toMatchSnapshot();
});




