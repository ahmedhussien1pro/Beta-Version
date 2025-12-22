import { useState } from 'react';
import { pricingPlans } from './pricingData';
import { FEATURES } from './features';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faStar } from '@fortawesome/free-solid-svg-icons';
import './pricing.css';

const Pricing = () => {
  const [billing, setBilling] = useState('monthly'); // monthly | yearly

  const getPrice = (price) => {
    if (price === 0) return 'Free';
    return billing === 'yearly' ? `$${price * 10}` : `$${price}`;
  };

  const getPeriod = (price) => {
    if (price === 0) return '';
    return billing === 'yearly' ? '/year' : '/mo';
  };

  return (
    <section className='pricing pricing--dark py-5'>
      <div className='container'>
        {/* Header */}
        <div className='text-center mb-4'>
          <h2 className='display-5 fw-bold text-white'>Pricing Plans</h2>
          <p className='pricing__subtitle mt-3'>
            Learn cybersecurity at your own pace.
          </p>
        </div>

        {/* Toggle */}
        <div className='pricing-toggle mb-5'>
          <button
            className={`pricing-toggle__btn ${
              billing === 'monthly' ? 'is-active' : ''
            }`}
            onClick={() => setBilling('monthly')}>
            Monthly
          </button>

          <button
            className={`pricing-toggle__btn ${
              billing === 'yearly' ? 'is-active' : ''
            }`}
            onClick={() => setBilling('yearly')}>
            Yearly <span>-2 months free</span>
          </button>
        </div>

        {/* Cards */}
        <div className='row g-4'>
          {pricingPlans.map((plan) => (
            <div key={plan.id} className='col-12 col-md-4'>
              <div
                className={`pricing-card ${
                  plan.popular ? 'pricing-card--highlight' : ''
                }`}>
                {plan.popular && (
                  <div className='pricing-card__badge'>
                    <FontAwesomeIcon icon={faStar} />
                    Most Popular
                  </div>
                )}

                <h3 className='pricing-card__title'>{plan.title}</h3>
                <p className='pricing-card__desc'>{plan.description}</p>

                <div className='pricing-card__price'>
                  <span className='pricing-card__amount'>
                    {getPrice(plan.price)}
                  </span>
                  <span className='pricing-card__period'>
                    {getPeriod(plan.price)}
                  </span>
                </div>

                <ul className='pricing-card__features list-unstyled'>
                  {FEATURES.map((feature) => {
                    const enabled = plan.features[feature.key];

                    return (
                      <li
                        key={feature.key}
                        className={`pricing-card__feature ${
                          enabled ? 'is-available' : 'is-unavailable'
                        }`}>
                        <FontAwesomeIcon icon={enabled ? faCheck : faXmark} />
                        <span>{feature.label}</span>
                      </li>
                    );
                  })}
                </ul>

                <button className='btn btn-gradient w-100 mt-3'>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
