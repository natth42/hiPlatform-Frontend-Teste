import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchSpotifyData, errorAlert, clearAlert, setFilterType } from '../../actions/index';
import { Link } from '../link/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
    Alert,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }
    
    search(e){
        e.preventDefault();
        if(e.target.search.value && e.target.search.value !== ' '){
            const values = {
                q: e.target.search.value,
                type: 'artist'
            };
            this.props.fetchSpotifyData(values);
        }else{
            this.props.errorAlert('Para fazer uma pesquisa é necessário digitar um nome no campo!');
            setTimeout(() => this.props.clearAlert(), 3000);
        }
    }

    render() {
        const { alert, typeFilter, setFilterType } = this.props;
        console.log(this.props.typeFilter, 'typeFilter');
      return (
        <Fragment>
            {
                alert.showMessage
                &&
                <div className="space-top space-sides center">
                    <Alert color="danger">
                        { alert.message }
                    </Alert>
                </div>
            }
            <Form onSubmit={this.search}>
            <FormGroup className="space-top center">
                <Label for="search" hidden>Procurar</Label>
                <Input className="input" type="text" name="search" id="search" placeholder="Procurar por nome" />
                <Button type="submit" className="search-button" color="success">
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </FormGroup>
            </Form>
            <div className="center">
                <Link active={
                    'artist' ===
                    typeFilter
                  }
                  onClick={() =>
                    setFilterType('artist')
                  } text={'Artista'}></Link>
                <Link active={
                    'album' ===
                    typeFilter
                  }
                  onClick={() =>
                    setFilterType('album')
                  }
                  text={'Album'}></Link>
                <Link active={
                    'track' ===
                    typeFilter
                  }
                  onClick={() =>
                    setFilterType('track')
                  }
                  text={'Música'}
                  ></Link>
            </div>
            <div className="space-top"></div>
        </Fragment>
      );
    }
  }


const mapStateToProps = state => {
    return {
      fetchSpotifyData,
      alert: state.alertReducer,
      errorAlert,
      clearAlert,
      typeFilter: state.typeFilterReducer,
      setFilterType
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchSpotifyData: (params) => dispatch(fetchSpotifyData(params)),
      errorAlert: (message) => dispatch(errorAlert(message)),
      clearAlert: () => dispatch(clearAlert()),
      setFilterType: (filter) => dispatch(setFilterType(filter))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBar);
