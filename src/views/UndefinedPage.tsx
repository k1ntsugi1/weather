import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const UndefinedPage: React.FC = () => {
  const { t } = useTranslation(); 
  return (
    <section className="p-5 h-100 container-undefinedPage d-flex justify-content-center align-items-center ">
      <div className="p-3 border border-dark rounded color-additional">
        <p className="h1">{t('undefindPage.haveNotFoundPage')}</p>
        <div className="text-center">
          <span>{t('undefindPage.suggestion')}</span>
          {' '}
          <Link to="/">{t('undefindPage.toHome')}</Link>
        </div>
      </div>
    </section>
  );
}

export default UndefinedPage;
