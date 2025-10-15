import styles from './Banner.module.css';

function Banner() {
  const text =
    'This Content is Coming Soon. Please check back later for updates.';
  // const icon.innerHtml = ``;
  return (
    <div className={styles.soonBannerContainer}>
      <div className={styles.soonBanner}>
        <div className={styles.soonBannerText}>
          {text}
          <i className='fa-solid fa-bolt banner-power-icons ms-2'></i>
          <i className='fa-solid fa-bolt banner-power-icons ms-2'></i>
        </div>
        <div className={styles.soonBannerText}>
          {text}
          <i className='fa-solid fa-bolt banner-power-icons ms-2'></i>
          <i className='fa-solid fa-bolt banner-power-icons ms-2'></i>
        </div>
      </div>
    </div>
  );
}

export default Banner;
