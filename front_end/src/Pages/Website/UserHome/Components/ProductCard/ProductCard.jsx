import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';
export default function ProductCard({ product }) {
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5 ? '★' : '';
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className='product-card col-md-4'>
      <div className='product-card__image'>
        <img src={product.image} alt={product.title} />
      </div>
      <div className='product-card__content'>
        <h3 className='product-card__title'>{product.title}</h3>
        <div className='product-card__body'>
          {' '}
          <p className='product-card__price'>${product.price}</p>
          <div className='product-card__rating'>
            {renderStars(product.rating.rate)}
          </div>
        </div>
        <Link
          to={`/CSRF/CSRF_labs/first_lab/productDetails/${product.id}`}
          className='product-card__details-btn'>
          Details
        </Link>
      </div>
    </div>
  );
}
