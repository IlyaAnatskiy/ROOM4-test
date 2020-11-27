import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentArtist } from '../redux/actions/artist';

const AboutArtistPage = () => {
  const dispatch = useDispatch();
  let { name } = useParams();
  const artist = useSelector((state) => state.artist.currentArtist);
  React.useEffect(() => {
    dispatch(fetchCurrentArtist(name));
  }, []);

  return (
    <div className="row w2">
      <div className="col s12 m7 w1">
        <div className="card">
          <div className="card-image">
            <img src={artist.image && artist.image[0]['#text']} />
            <span className="card-title c1">{artist.name}</span>
          </div>
          <div className="card-content">
            <div className="card-links">
              {artist.tags &&
                artist.tags.tag.map((obj, id) => (
                  <a href={obj.url} key={`${obj.name}_${id}`}>
                    {obj.name}
                  </a>
                ))}
            </div>

            <p>{artist.bio && artist.bio.content}</p>
          </div>
          <div className="card-action">
            <Link to="/">Go Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArtistPage;
