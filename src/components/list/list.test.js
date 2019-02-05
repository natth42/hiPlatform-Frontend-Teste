import React from 'react';
import List from './list';
import { shallow } from 'enzyme';

it('renders List without crashing', () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toMatchSnapshot();
});




