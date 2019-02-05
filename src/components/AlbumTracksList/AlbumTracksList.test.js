import React from 'react';
import AlbumsTracksList from './AlbumTracksList';
import { shallow } from 'enzyme';

it('renders AlbumsTracksList without crashing', () => {
    const wrapper = shallow(<AlbumsTracksList />);
    expect(wrapper).toMatchSnapshot();
});




