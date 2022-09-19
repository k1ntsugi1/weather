import cn from 'classnames';
import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

const CardError: React.FC = ({ errorOfPoint, currentPage, styles }) => {
  const { t } = useTranslation();
  const classnamesOfContainer = cn('container-glass', 'b-rad-10', 'bg-gradient-main', 'color-main', {
    'back-face-of-card': currentPage === 'homePage',
  });
  
  return (
    <div className={classnamesOfContainer} style={styles}>
      <div className="back-face-of-glass b-rad-10" />
      <div className="ps-2 front-face-of-glass b-rad-10 fw-bold">

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="pb-1 bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          <span className="fs-6">{t('errorOfRequest.noData')}</span>
          <p className="m-0 fs-6">{t('errorOfRequest.reconecting')}</p>
        </div>

        <p className="m-0 fs-6 text-truncate">
          {t('errorOfRequest.point')}
          {' '}
          {errorOfPoint.point}
        </p>
        <p className="m-0 fs-6 text-secondary">
          {t('errorOfRequest.code')}
          {' '}
          {errorOfPoint.code}
        </p>
      </div>
    </div>
  );
}

export default CardError;
