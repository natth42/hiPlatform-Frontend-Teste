import AppRouter from './App';
import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import PageNotFound from '../components/pageNotFound/pageNotFound';
import Login from '../components/login/login';

test('rediret to login page', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/login']}>
            <AppRouter />
        </MemoryRouter>
    );

    expect(wrapper.find(Login)).toHaveLength(1);
});

test('rediret to page not found', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/ramdon']}>
            <AppRouter />
        </MemoryRouter>
    );

    expect(wrapper.find(PageNotFound)).toHaveLength(1);
});
