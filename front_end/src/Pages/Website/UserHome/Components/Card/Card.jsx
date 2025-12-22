import { Link } from 'react-router-dom';
import './Card.css';

export const Card = ({
  link,
  image,
  alt = 'Example',
  title,
  brief,
  difficulty,
}) => {
  const snippetLength = 80;
  const shortBrief =
    brief.length > snippetLength
      ? brief.substring(0, snippetLength) + '...'
      : brief;

  return (
    <div className=' col-lg-4 col-md-6 col-sm-12 mb-4'>
      <Link to={link} className='lab-card w-100'>
        <div className='lab-card__image-container'>
          <img src={image} alt={alt} className='lab-card__image' />
        </div>

        <div className='lab-card__content-wrapper'>
          <h3 className='lab-card__title open-sans'>{title}</h3>
          <p className='lab-card__description'>{shortBrief}</p>
          <div
            className={`lab-card__difficulty-badge my-2 lab-card__difficulty-badge--${difficulty.toLowerCase()}`}>
            <i className='fa-solid fa-signal lab-card__badge-icon'></i>
            <span>{difficulty}</span>
          </div>
        </div>

        <div className='lab-card__overlay'>
          <p className='lab-card__overlay-description'>{brief}</p>
        </div>
      </Link>
    </div>
  );
};
