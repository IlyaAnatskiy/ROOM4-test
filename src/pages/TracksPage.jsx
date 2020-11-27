import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTracks } from '../redux/actions/tracks';

import Track from '../components/Track';

const TracksPage = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks.tracks);

  React.useEffect(() => {
    dispatch(fetchTracks());
  }, []);

  return (
    <ul className="collection">
      {tracks && tracks.map((obj, id) => <Track key={`${id}_${obj.name}`} {...obj} />)}
    </ul>
  );
};

export default TracksPage;
