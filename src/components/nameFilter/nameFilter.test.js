import  React from 'react';
import  NameFilter  from './nameFilter';
import { shallow } from 'enzyme';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<NameFilter />)
});

it('renders NameFilter without crashing', () => {
   const render = shallow(<NameFilter />)
});




