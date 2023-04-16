import { useState } from 'react';
import Background from '../components/Background';
import { useTranslation } from 'react-i18next';
import { HiOutlineLanguage } from 'react-icons/hi2';

function About() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en';
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <>
      <button type="button" onClick={() => handleChangeLanguage()}>
        <HiOutlineLanguage /> as
      </button>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-Montserrat text-white">
        {/* ABOUT */}
        <div className="flex-wrap w">
          <p>{t('apresentacao1')}</p>
          <p>{t('apresentacao2')}</p>

          <p>{t('apresentacao3')}</p>
        </div>

        {/* OBJECTIVE */}
        <div className="">
          <p></p>
        </div>
      </div>
      <Background />
    </>
  );
}

export default About;
