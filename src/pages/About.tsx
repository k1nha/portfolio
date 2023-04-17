import { useState } from 'react';
import Background from '../components/Background';
import { useTranslation } from 'react-i18next';
import { HiOutlineLanguage } from 'react-icons/hi2';
import BackButton from '../components/BackButton';

const underlineEffect =
  "relative before:content-[''] before:absolute before:block  before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300";

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
      <BackButton />
      <button
        className="absolute top-20 right-20 text-white bg-BabyBlue px-2 py-1 shadow-2xl rounded-md"
        type="button"
        onClick={() => handleChangeLanguage()}
      >
        <HiOutlineLanguage />
      </button>

      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-Montserrat text-white">
        {/* ABOUT */}
        <div className="flex flex-col gap-4 flex-wrap max-w-[750px] ">
          <h1 className="text-3xl">{t('apresentacao-1')}</h1>
          <p>{t('apresentacao-2')}</p>

          <p>{t('apresentacao-3')}</p>

          {/* OBJECTIVE */}
          <div className="">
            <h1
              className={
                underlineEffect + ' before:w-[100px] font-bold text-xl'
              }
            >
              {t('objetivo')}
            </h1>
            <p>{t('objetivos-1')}</p>
            <p>{t('objetivos-2')}</p>
          </div>

          {/* EXPERIENCES */}
          <div className="">
            <h1
              className={
                underlineEffect + ' before:w-[128px] font-bold text-xl'
              }
            >
              {t('experiencias')}
            </h1>

            {/* INTERA */}
            <div className="">
              <li className="text-lg">{t('intera')}</li>
              <p>{t('intera-1')}</p>
            </div>

            {/* FREELA */}
            <div className="mt-4">
              <li className="text-lg">{t('freelancer')}</li>
              <p>{t('freelancer-1')}</p>
            </div>


          </div>
          
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
