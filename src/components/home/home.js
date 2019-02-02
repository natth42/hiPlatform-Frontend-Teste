import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Filters from '../filters/filters';
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
          <Filters />
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

Home.propTypes = {
  token: PropTypes.string
};

export default connect(
  mapStateToProps,
  null
)(Home);
