import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './home.scss';
import Header from '../header/header';
import Filters from '../filters/filters';
import List from '../list/list';
import { Loading } from '../loading/loading';
import {
    Container
} from 'reactstrap';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loadingToken: true
        };
    }

    componentDidMount() {
        document.title = "Home"
        const { token } = this.props;
        if (!token) {
            this.props.history.push("/login");
        }
        setTimeout(() => {
            this.setState({loadingToken: false});
        }, 1000);
    }

    render() {
        return (
            <Fragment>
                <Header />
                {
                    !this.state.loadingToken
                    &&
                    <div>
                        <Container>
                            <Filters />
                        </Container>
                        <Container>
                            <List />
                        </Container>
                    </div>    
                }
                <Loading loading={this.state.loadingToken} />
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
