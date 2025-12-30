import { Link } from 'react-router-dom';
import './Card.css';

export const Card = ({
  link,
  image,
  alt = 'Lab Preview',
  title,
  brief,
  difficulty,
  isFree = true,
  topicsCount = 0,
}) => {
  // make Title - Max 3 words visible and Brief - Max 1.75 lines visible in normal state
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  return (
    <div className='col-lg-4 col-md-6 col-sm-12 mb-4'>
      <div className='lab-card'>
        <Link to={link} className='lab-card__link'>
          {/* Image Section */}
          <div className='lab-card__image-wrapper'>
            <img src={image} alt={alt} className='lab-card__image' />

            {/* Available Badge on Image */}
            <div className='lab-card__status'>
              <span className='lab-card__status-badge'>
                <i className='fa-solid fa-check-circle'></i>
                Available
              </span>
            </div>
          </div>

          {/* Content Section - Normal State */}
          <div className='lab-card__content'>
            {/* Title - Max 3 words visible */}
            <h3 className='lab-card__title'>{truncateText(title, 3)}</h3>

            {/* Brief - Max 1.75 lines visible */}
            <p className='lab-card__brief'>{truncateText(brief, 15)}</p>

            {/* Footer with Badges */}
            <div className='lab-card__footer'>
              {/* Left Side - Badges */}
              <div className='lab-card__badges'>
                <span
                  className={`lab-card__badge lab-card__badge--${difficulty.toLowerCase()}`}>
                  <i className='fa-solid fa-signal'></i>
                  {difficulty}
                </span>

                <span
                  className={`lab-card__badge ${
                    isFree
                      ? 'lab-card__badge--free'
                      : 'lab-card__badge--premium'
                  }`}>
                  <i
                    className={`fa-solid ${
                      isFree ? 'fa-unlock' : 'fa-crown'
                    }`}></i>
                  {isFree ? 'Free' : 'Pro'}
                </span>
              </div>

              {/* Right Side - Topics */}
              {topicsCount > 0 && (
                <div className='lab-card__topics'>
                  <i className='fa-solid fa-layer-group'></i>
                  {topicsCount} Topics
                </div>
              )}
            </div>
          </div>

          {/* Hover Overlay - Full Content + Start Button */}
          <div className='lab-card__hover'>
            <div className='lab-card__hover-content'>
              {/* Full Title - No truncation */}
              <h3 className='lab-card__hover-title'>{title}</h3>

              {/* Full Brief - No truncation */}
              <div className='lab-card__hover-brief'>{brief}</div>

              {/* Start Lab Button */}
              <button className='lab-card__start-btn'>
                Start Lab
                <i className='fa-solid fa-arrow-right'></i>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
