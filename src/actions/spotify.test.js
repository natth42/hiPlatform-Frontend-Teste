import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    fetchData,
    fetchAlbumsData,
    fetchTracksData,
    fetchSpotifyData,
    fetchSpotifyAlbumsData,
    fetchSpotifyTracksData,
    errorTratament
} from './spotify';
import { FETCH_SPOTIFY_DATA, FETCH_SPOTIFY_DATA_ALBUMS, FETCH_SPOTIFY_DATA_TRACKS, ALERT_ERROR } from './types';
import moxios from 'moxios';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('should create an action to return spotify data', () => {
        const spotifyData = [{ name: 'item test', id: 51651 }]
        const expectedAction = {
            type: FETCH_SPOTIFY_DATA,
            spotifyData
        }
        expect(fetchData(spotifyData)).toEqual(expectedAction)
    })

    it('should create an action to return album of an artist', () => {
        const spotifyAlbumsArtists = [{ name: 'item test', id: 51651 }]
        const expectedAction = {
            type: FETCH_SPOTIFY_DATA_ALBUMS,
            spotifyAlbumsArtists
        }
        expect(fetchAlbumsData(spotifyAlbumsArtists)).toEqual(expectedAction)
    })

    it('should create an action to return tracks of an album', () => {
        const spotifyAlbumTracks = { name: 'item test', id: 51651, favorite: true }
        const expectedAction = {
            type: FETCH_SPOTIFY_DATA_TRACKS,
            spotifyAlbumTracks
        }
        expect(fetchTracksData(spotifyAlbumTracks)).toEqual(expectedAction)
    })

    it('call fetchSpotifyData and dispach action FETCH_SPOTIFY_DATA (success case)', () => {
        const data = [{ name: 'item test 1', id: 51651 }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: data,
            });
        });

        const store = mockStore({})

        const expectedPayload = [{
            type: FETCH_SPOTIFY_DATA,
            spotifyData: data
        }]

        return store.dispatch(fetchSpotifyData({ q: 'test param' })).then(() => {
            expect(store.getActions()).toEqual(expectedPayload)
        })
    })

    it('call fetchSpotifyData and dispach action FETCH_SPOTIFY_DATA (error case)', () => {
        const data = [{ name: 'item test 1', id: 51651 }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 401,
                response: data,
            });
        });

        const store = mockStore({})

        const expectedPayloadError = {
            "type": ALERT_ERROR,
            "message": "Sua Sessão expirou, se autentique novamente!"
        }

        return store.dispatch(fetchSpotifyData({ q: 'test param' })).then(() => {
        }).catch((error) => {
            errorTratament(expectedPayloadError);
        })
    })

    it('call fetchSpotifyAlbumsData and dispach action FETCH_SPOTIFY_DATA_ALBUMS (success case)', () => {
        const data = [{ name: 'item test 1', id: 51651 }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: data,
            });
        });

        const store = mockStore({})

        const expectedPayload = [{
            type: FETCH_SPOTIFY_DATA_ALBUMS,
            spotifyAlbumsArtists: data
        }]

        return store.dispatch(fetchSpotifyAlbumsData(123)).then(() => {
            expect(store.getActions()).toEqual(expectedPayload)
        })
    })

    it('call fetchSpotifyAlbumsData and dispach action FETCH_SPOTIFY_DATA_ALBUMS (error case)', () => {
        const data = [{ name: 'item test 1', id: 51651 }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 401,
                response: data,
            });
        });

        const store = mockStore({})

        const expectedPayloadError = {
            "type": ALERT_ERROR,
            "message": "Sua Sessão expirou, se autentique novamente!"
        }

        return store.dispatch(fetchSpotifyData(123)).then(() => {
        }).catch((error) => {
            errorTratament(expectedPayloadError);
        })
    })

    it('call fetchSpotifyTracksData and dispach action FETCH_SPOTIFY_DATA_TRACKS (success case)', () => {
        const data = [{ name: 'item test 1', id: 51651 }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: data,
            });
        });

        const store = mockStore({})

        const expectedPayload = [{
            type: FETCH_SPOTIFY_DATA_TRACKS,
            spotifyAlbumTracks: data
        }]

        return store.dispatch(fetchSpotifyTracksData(123)).then(() => {
            expect(store.getActions()).toEqual(expectedPayload)
        })
    })

    it('call fetchSpotifyTracksData and dispach action FETCH_SPOTIFY_DATA_TRACKS (error case)', () => {
        const data = [{ name: 'item test 1', id: 51651 }];
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 401,
                response: data,
            });
        });

        const store = mockStore({})

        const expectedPayloadError = {
            "type": ALERT_ERROR,
            "message": "Sua Sessão expirou, se autentique novamente!"
        }

        return store.dispatch(fetchSpotifyTracksData(123)).then(() => {
        }).catch((error) => {
            errorTratament(expectedPayloadError);
        })
    })

})