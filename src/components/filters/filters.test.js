import React from 'react';
import Filters from './filters';
import { shallow } from 'enzyme';

it('renders Filters without crashing', () => {
    const wrapper = shallow(<Filters />);
    expect(wrapper).toMatchSnapshot();
});




