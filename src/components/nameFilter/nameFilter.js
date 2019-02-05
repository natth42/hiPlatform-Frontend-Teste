import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSpotifyData, errorAlert, clearAlert, setNameFilter } from '../../actions/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

class NameFilter extends React.Component {

    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
    }

    search(e) {
        e.preventDefault();
        const name = e.target.search.value;
        if (name && name !== ' ') {
            const values = {
                q: name,
                type: this.props.typeFilter
            };
            this.props.setNameFilter(name.trim().toLowerCase());
            this.props.fetchSpotifyData(values);
        } else {
            this.props.errorAlert('Para fazer uma pesquisa é necessário digitar um nome no campo!');
            setTimeout(() => this.props.clearAlert(), 3000);
        }
    }

    render() {
        return (
            <Fragment>
                <Form id="form" className="form" onSubmit={this.search}>
                    <FormGroup className="space-top center">
                        <Label for="search" hidden>Procurar</Label>
                        <Input aria-label="campo de busca, digite o que deseja procurar" className="input" type="text" name="search" id="search" placeholder="Procurar por nome" />
                        <Button type="submit" aria-label="botão de busca" className="search-button" color="success">
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </FormGroup>
                </Form>
            </Fragment>
        );
    }
}


const mapStateToProps = state => {
    return {
        fetchSpotifyData,
        setNameFilter,
        typeFilter: state.typeFilterReducer
    };
};

NameFilter.propTypes = {
    typeFilter: PropTypes.string,
    fetchSpotifyData: PropTypes.func,
    setNameFilter: PropTypes.func,
    errorAlert: PropTypes.func,
    clearAlert: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSpotifyData: (params) => dispatch(fetchSpotifyData(params)),
        setNameFilter: (name) => dispatch(setNameFilter(name)),
        errorAlert: (message) => dispatch(errorAlert(message)),
        clearAlert: () => dispatch(clearAlert())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameFilter);
