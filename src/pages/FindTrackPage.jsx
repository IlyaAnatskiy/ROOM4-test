import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { clearSerchTrack, fetchSearchTrack } from '../redux/actions/tracks';

const FindTrackPage = () => {
  const dispatch = useDispatch();
  const [error, setError] = React.useState(false);
  const tracks = useSelector((state) => state.tracks.searchTrack);
  const ref = React.useRef(null);

  const clickHandler = () => {
    if (ref.current.value.trim()) {
      setError(false);
      dispatch(fetchSearchTrack(ref.current.value));
    } else {
      setError(!error);
    }
  };

  React.useEffect(() => {
    return () => {
      dispatch(clearSerchTrack());
    };
  }, []);

  return (
    <>
      <div className="input-field mt2 flex">
        <input ref={ref} type="text" id="title" placeholder="Write the name of the track" />
        <label htmlFor="title" className="active">
          Write the name of the track
        </label>
        <a className="wwaves-effect waves-light btn brown darken-2 w20" onClick={clickHandler}>
          Find
        </a>
      </div>
      {error && <span className="error">Fill in the fields</span>}

      {tracks.length > 1 && (
        <ul className="collection">
          {tracks.map((obj, id) => (
            <li key={`${obj.name}_${id}`} className="collection-item">
              <span className="title">{obj.artist}</span>
              <p>{obj.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FindTrackPage;
