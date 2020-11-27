import axios from 'axios';

export const fetchCurrentArtist = (name) => (dispatch) => {
  axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${name}&api_key=00d0382fa2e761fd66140773435e0f3b&format=json`,
    )
    .then(({ data }) => dispatch(setCurrentArtist(data.artist)));
};

export const setCurrentArtist = (items) => ({
  type: 'SET_CURRENT_ARTIST',
  payload: items,
});
