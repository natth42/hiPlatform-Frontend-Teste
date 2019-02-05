import React from 'react';
import PageNotFound from './pageNotFound';
import { shallow } from 'enzyme';

it('renders PageNotFound without crashing', () => {
    const wrapper = shallow(<PageNotFound />)
    expect(wrapper).toMatchSnapshot();
});

it('renders h1 with text = Não achamos a página que está procurando!😟', () => {
    const wrapper = shallow(<PageNotFound />)
    expect(wrapper.find('h1').text()).toBe('Não achamos a página que está procurando!😟');
});