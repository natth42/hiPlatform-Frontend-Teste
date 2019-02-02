import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchSpotifyAlbumsData, fetchSpotifyTracksData } from '../../actions/index';
import Header from '../header/header';
import LatestsAlbumsList from '../latestsAlbumsList/latestsAlbumsList.js';
import AlbumTracksList from '../AlbumTracksList/AlbumTracksList';
import {
  Container
} from 'reactstrap';

class ListDetails extends React.Component {

    constructor(props){
      super(props);
      const {id, type} = this.props.match.params;
      this.state = { type, id };
    }

    componentDidMount(){
        if(this.state.type === 'artist'){
          this.props.fetchSpotifyAlbumsData(this.state.id);
        }else if(this.state.type === 'album'){
          this.props.fetchSpotifyTracksData(this.state.id);
        }
    }

  render() {
    const { spotifyAlbumsArtists, spotifyAlbumsTracks } = this.props;
    return (
      <Fragment>
        <Header />
        <Container> 
          <h1 className="center">{this.state.type === 'artist' ? 'Últimos 5 albums!' : 'Todas as Músicas'} 🔥</h1>
          {
            this.state.type
            &&
            this.state.type === 'artist'
            &&
            <LatestsAlbumsList albums={spotifyAlbumsArtists} />
          }
          {
            this.state.type
            &&
            this.state.type === 'album'
            &&
            <AlbumTracksList tracks={spotifyAlbumsTracks} />
          }
        </Container> 
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchSpotifyAlbumsData,
    fetchSpotifyTracksData,
    spotifyAlbumsArtists: state.spotifyReducer,
    spotifyAlbumsTracks: state.spotifyReducer
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSpotifyAlbumsData: (id) => dispatch(fetchSpotifyAlbumsData(id)),
        fetchSpotifyTracksData: (id) => dispatch(fetchSpotifyTracksData(id))
    };
};

export default connect(
    mapStateToProps,
  mapDispatchToProps
)(ListDetails);
