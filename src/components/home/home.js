import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import SearchBar from '../SearchBar/searchBar';
import List from '../list/list';
import { fetchSpotifyData } from '../../actions/index';

class Home extends React.Component {
  componentDidMount() {
    const { token } = this.props;
    if(token){
      this.props.fetchSpotifyData();
    }else{
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <Fragment>
        <Header />  
        <SearchBar />
        <List />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.tokenReducer,
    fetchSpotifyData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpotifyData: () => dispatch(fetchSpotifyData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
