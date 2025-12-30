import { Link } from 'react-router-dom';
import './Card.css';

export const Card = ({
  link,
  image,
  alt = 'Lab Preview',
  en_title,
  ar_title,
  en_brief,
  ar_brief,
  en_difficulty,
  ar_difficulty,
  isFree = true,
  topicsCount = 0,
}) => {
  // make Title - Max 3 words visible and Brief - Max 1.75 lines visible in normal state
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };
  const Lang = localStorage.getItem('lang') || 'en';

  return (
    <div className='col-lg-4 col-md-6 col-sm-12 mb-4 d-flex'>
      <div className='lab-card'>
        <Link to={link} className='lab-card__link'>
          {/* Image Section */}
          <div className='lab-card__image-wrapper'>
            <img src={image} alt={alt} className='lab-card__image' />

            {/* Available Badge on Image */}
            <div className='lab-card__status'>
              <span className='lab-card__status-badge'>
                <i className='fa-solid fa-check-circle'></i>
                {Lang === 'en' ? 'Available' : 'متاح'}
              </span>
            </div>
          </div>

          {/* Content Section - Normal State */}
          <div className='lab-card__content'>
            {/* Title - Max 3 words visible */}
            <h3 className='lab-card__title'>
              {Lang === 'en'
                ? truncateText(en_title, 3)
                : truncateText(ar_title, 6)}
            </h3>

            {/* Brief - Max 1.75 lines visible */}
            <p className='lab-card__brief'>
              {Lang === 'en'
                ? truncateText(en_brief, 15)
                : truncateText(ar_brief, 15)}
            </p>
            {/* Footer with Badges */}
            <div className='lab-card__footer'>
              {/* Left Side - Badges */}
              <div className='lab-card__badges'>
                <span
                  className={`lab-card__badge lab-card__badge--${en_difficulty.toLowerCase()}`}>
                  <i className='fa-solid fa-signal'></i>
                  {Lang === 'en' ? en_difficulty : ar_difficulty}
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
                  {isFree
                    ? Lang === 'en'
                      ? 'Free'
                      : 'مجاني'
                    : Lang === 'en'
                    ? 'Premium'
                    : 'مدفوع'}
                </span>
              </div>

              {/* Right Side - Topics */}
              {topicsCount > 0 && (
                <div className='lab-card__topics'>
                  <i className='fa-solid fa-layer-group'></i>
                  {topicsCount}{' '}
                  {Lang === 'en'
                    ? topicsCount === 1
                      ? 'Topic'
                      : 'Topics'
                    : topicsCount === 1
                    ? 'موضوع'
                    : 'مواضيع'}
                </div>
              )}
            </div>
          </div>

          {/* Hover Overlay - Full Content + Start Button */}
          <div className='lab-card__hover'>
            <div className='lab-card__hover-content'>
              {/* Full Title - No truncation */}
              <h3 className='lab-card__hover-title'>
                {Lang === 'en' ? en_title : ar_title}
              </h3>

              {/* Full Brief - No truncation */}
              <div className='lab-card__hover-brief'>
                {Lang === 'en' ? en_brief : ar_brief}
              </div>

              {/* Start Lab Button */}
              <button className='lab-card__start-btn'>
                {Lang === 'en' ? 'Start Lab' : 'ابدأ اللاب'}
                <i className='fa-solid fa-arrow-right'></i>
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
