import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../header/header';
import SearchBar from '../SearchBar/searchBar';
import List from '../list/list';
import {
  Container
} from 'reactstrap';

class Home extends React.Component {
  componentDidMount() {
    const { token } = this.props;
    if(!token){
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Container> 
          <SearchBar />
        </Container> 
        <Container>
          <List />
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.tokenReducer
  };
};

export default connect(
  mapStateToProps,
  null
)(Home);
