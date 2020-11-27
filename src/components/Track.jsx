import React from 'react';
import { Link } from 'react-router-dom';

const Track = ({ name, artist, image }) => {
  return (
    <li className="collection-item avatar">
      <img src={image && image[2]['#text']} alt="" className="circle" />
      <Link to={`/about/${artist.name}`}>
        <span className="title">{artist.name}</span>
      </Link>
      <p>{name}</p>
      <a href={artist.url} className="secondary-content">
        <i className="material-icons">account_circle</i>
      </a>
    </li>
  );
};

export default Track;
