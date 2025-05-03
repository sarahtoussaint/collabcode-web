import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ src, emoji, text, label, path, external, onClick }) {
  const CardContent = () => (
    <>
      <div
        className="cards__item__pic-wrap"
        data-category={label}
        style={{ position: 'relative', width: '100%', paddingTop: '67%' }}
      >
        {emoji ? (
          <div className="emoji-icon" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            {emoji}
          </div>
        ) : (
          <img className="cards__item__img" alt={label} src={src} />
        )}
      </div>

      <div className="cards__item__info">
        <h5 className="cards__item__text">{text}</h5>
      </div>
    </>
  );

  return (
    <li className="cards__item" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      {path ? (
        external ? (
          <a className="cards__item__link" href={path} target="_blank" rel="noopener noreferrer">
            <CardContent />
          </a>
        ) : (
          <Link className="cards__item__link" to={path}>
            <CardContent />
          </Link>
        )
      ) : (
        <div className="cards__item__link">
          <CardContent />
        </div>
      )}
    </li>
  );
}
export default CardItem;
