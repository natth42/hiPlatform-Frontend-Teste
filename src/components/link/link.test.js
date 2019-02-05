import React from 'react';
import { Link } from './link';
import { shallow } from 'enzyme';

it('renders Link without crashing', () => {
   const wrapper = shallow(<Link />);
   expect(wrapper).toMatchSnapshot();
});




