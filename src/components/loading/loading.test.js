import React from 'react';
import { Loading } from './loading';
import { shallow } from 'enzyme';

it('renders Loading without crashing', () => {
    const props = {
        loading: false
    };
    const wrapper = shallow(<Loading {...props} />);
    expect(wrapper).toMatchSnapshot();
});