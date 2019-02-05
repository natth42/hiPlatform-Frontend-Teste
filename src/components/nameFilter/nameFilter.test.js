import  React from 'react';
import  NameFilter from './nameFilter';
import { shallow } from 'enzyme';

it('renders NameFilter without crashing', () => {
   const render = shallow(<NameFilter />);
   expect(render).toMatchSnapshot();
});





