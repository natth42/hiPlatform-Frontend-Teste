import React, { Fragment } from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';
import { connect } from 'react-redux';

const ListItems = ({ typeFilter, spotifyData }) => {
    return (
        <Fragment>
            {
                typeFilter === 'artist'
                &&
                spotifyData.artists
                &&
                spotifyData.artists.items.map((item) =>
                    (
                        <tr key={item.id}>
                            <td>
                                <Container>
                                    <Row>
                                        <Col xs="auto">
                                        {
                                            item.images[0]
                                            &&
                                            <img src={item.images[0].url} alt="" height="64" width="64" />
                                        }
                                        </Col>
                                        <Col>
                                            {item.name}
                                        </Col>
                                    </Row>
                                </Container>
                            </td>
                            <td>
                                {
                                    item.genres.join(", ")
                                }
                            </td>
                            <td>{
                                item.popularity >= 80 ? 'Hot' : item.popularity >= 60 && item.popularity <= 79 ? 'Cool' : item.popularity >= 30 && item.popularity <= 59 ? 'Regular' : 'Underground' 
                            }</td>
                        </tr>
                    )
                )
            }

            {
                typeFilter === 'album'
                &&
                spotifyData.albums
                &&
                spotifyData.albums.items.map((item) =>
                    (
                        <tr key={item.id}>
                            <td>
                                <Container>
                                    <Row>
                                        <Col xs="auto">
                                        {
                                            item.images[0]
                                            &&
                                            <img src={item.images[0].url} alt="" height="64" width="64" />
                                        }
                                        </Col>
                                        <Col>
                                        {item.name}
                        </Col>
                                    </Row>
                                </Container>
                            </td>
                            <td>
                            {
                                item.artists.length > 2 ?
                                'Various artists'
                                :
                                item.artists.map((artist) => (
                                    <div key={artist.id}>{artist.name}</div>
                                ))
                            }
                            </td>
                            <td>{item.release_date}</td>
                        </tr>
                    )
                )
            }

            {
                typeFilter === 'track'
                &&
                spotifyData.tracks
                &&
                spotifyData.tracks.items.map((item) =>
                    (
                        <tr key={item.id}>
                            <td>
                                <Container>
                                    <Row>
                                        <Col xs="auto">
                                        {
                                            item.album.images[0]
                                            &&
                                            <img src={item.album.images[0].url} alt="" height="64" width="64" />
                                        }
                        </Col>
                                        <Col>
                                            {item.name}
                        </Col>
                                    </Row>
                                </Container>
                            </td>
                            <td>
                            {
                                item.artists.map((artist) => (
                                    <div key={artist.id}>{artist.name}</div>
                                ))
                            }
                            </td>
                            <td>{item.album.name}</td>
                            <td>{item.duration_ms}</td>
                        </tr>
                    )
                )
            }
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        typeFilter: state.typeFilterReducer,
        spotifyData: state.spotifyReducer
    };
};

export default connect(
    mapStateToProps,
    null
)(ListItems);