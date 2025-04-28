import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ src, text, label, path, external }) {
  const CardContent = () => (
    <>
      <figure className="cards__item__pic-wrap" data-category={label}>
        <img className="cards__item__img" alt="Card Label" src={src} />
      </figure>
      <div className="cards__item__info">
        <h5 className="cards__item__text">{text}</h5>
      </div>
    </>
  );

  return (
    <li className="cards__item">
      {external ? (
        <a
          className="cards__item__link"
          href={path}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardContent />
        </a>
      ) : (
        <Link className="cards__item__link" to={path}>
          <CardContent />
        </Link>
      )}
    </li>
  );
}

export default CardItem;
