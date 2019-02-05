import  React from 'react';
import  LatestsAlbumsList  from './latestsAlbumsList';
import { shallow } from 'enzyme';

it('renders LatestsAlbumsList without crashing', () => {
   const wrapper = shallow(<LatestsAlbumsList />);
   expect(wrapper).toMatchSnapshot();
});




