import  React from 'react';
import  ListItems  from './listItems';
import { shallow } from 'enzyme';

it('renders ListItems without crashing', () => {
   const wrapper = shallow(<ListItems />)
   expect(wrapper).toMatchSnapshot();
});
