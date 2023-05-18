import { useEffect, useState } from 'react';
import Background from '../components/Background';
import { useTranslation } from 'react-i18next';
import { HiOutlineLanguage } from 'react-icons/hi2';
import BackButton from '../components/BackButton';
import { motion as m } from 'framer-motion';

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

      <m.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-5 md:right-10 lg:right-20 text-white bg-BabyBlue px-2 py-1 shadow-2xl rounded-md"
        type="button"
        onClick={() => handleChangeLanguage()}
      >
        <HiOutlineLanguage />
      </m.button>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-Montserrat text-white p-5 md:p-0 text-xs md:text-base">
          {/* ABOUT */}
          <div className="flex flex-col gap-4 flex-wrap max-w-[750px] ">
            <div className="text-lg md:text-2xl font-bold flex justify-between">
              <h1>{t('sobre')}</h1>

              <m.button
                whileHover={{
                  x: -20,
                  transition: { duration: 0.3 },
                }}
                className="text-lg md:text-xl text-right text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0]"
              >
                <a href="">{t('curriculo')}</a>
              </m.button>
            </div>

            <h1 className="text-2xl md:text-3xl text-BabyGreen">
              {t('apresentacao-1')}
            </h1>
            <p>{t('apresentacao-2')}</p>

            <p>{t('apresentacao-3')}</p>

            {/* OBJECTIVE */}
            <div className="">
              <h1
                className={
                  underlineEffect +
                  ' before:w-[100px] font-bold text-lg md:text-xl'
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
                  underlineEffect +
                  ' before:w-[128px] font-bold text-lg md:text-xl'
                }
              >
                {t('experiencias')}
              </h1>

              {/* INTERA */}
              <div className="">
                <li className="text-base md:text-xl">{t('intera')}</li>
                <p>{t('intera-1')}</p>
              </div>

              {/* FREELA */}
              <div className="mt-4">
                <li className="text-base md:text-xl">{t('freelancer')}</li>
                <p>{t('freelancer-1')}</p>
              </div>
            </div>
          </div>
        </div>
      </m.div>

      <Background />
    </>
  );
}

export default About;
