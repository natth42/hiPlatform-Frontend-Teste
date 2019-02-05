import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSpotifyAlbumsData, fetchSpotifyTracksData } from '../../actions/index';
import Header from '../header/header';
import LatestsAlbumsList from '../latestsAlbumsList/latestsAlbumsList.js';
import AlbumTracksList from '../AlbumTracksList/AlbumTracksList';
import { withRouter } from "react-router";
import {
  Button,
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
            <Button className="buttonSpotify space-top" color="success" onClick={() => this.props.history.push(`/lista`)}>Voltar</Button>
            <h1 className="center">{this.state.type === 'artist' ? 'Últimos 5 albums!' : 'Todas as Músicas'}</h1>
          {
            this.state.type
            &&
            this.state.type === 'artist'
            &&
            <LatestsAlbumsList albums={spotifyAlbumsArtists.items} />
          }
          {
            this.state.type
            &&
            this.state.type === 'album'
            &&
            <AlbumTracksList tracks={spotifyAlbumsTracks.items} />
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

ListDetails.propTypes = {
  fetchSpotifyAlbumsData: PropTypes.func,
  fetchSpotifyTracksData: PropTypes.func,
  spotifyAlbumsArtists: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  spotifyAlbumsTracks: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSpotifyAlbumsData: (id) => dispatch(fetchSpotifyAlbumsData(id)),
        fetchSpotifyTracksData: (id) => dispatch(fetchSpotifyTracksData(id))
    };
};

export default withRouter(connect(
    mapStateToProps,
  mapDispatchToProps
)(ListDetails));
