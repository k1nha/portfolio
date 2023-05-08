import BackButton from '@/components/BackButton';
import Background from '../components/Background';
import { motion as m } from 'framer-motion';
import { HiOutlineLanguage } from 'react-icons/hi2';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';

function Contact() {
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

  const copyEmail = () => {
    navigator.clipboard.writeText('lucascmpusdev@gmail.com');
    toast.success('Email Copied');
  };

  return (
    <>
      <BackButton />
      <m.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-5 md:right-10 lg:right-20 text-white bg-BabyBlue px-2 py-1 shadow-2xl rounded-md"
        type="button"
        onClick={() => handleChangeLanguage()}
      >
        <HiOutlineLanguage />
      </m.button>

      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-Montserrat text-xl text-white text-left p-5 md:p-0">
        <div className="flex flex-col gap-6 flex-wrap max-w-[750px]">
          <div className="text-5xl font-bold">
            <h1>{t('contato')}</h1>
          </div>

          <div className="">{t('contato-1')}</div>

          <div className="">{t('contato-2')}</div>
          <div className="">{t('contato-3')}</div>

          <div className="flex flex-col gap-4">
            <m.p
              id="email"
              whileHover={{
                x: 20,
                transition: { duration: 0.3 },
              }}
              className="text-2xl font-bold w-[400px] text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0] cursor-pointer"
              onClick={() => copyEmail()}
            >
              <a>Email</a>
            </m.p>
            <m.p
              whileHover={{
                x: 20,
                transition: { duration: 0.3 },
              }}
              className="text-2xl font-bold w-[400px] text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0]"
            >
              <a href="https://www.linkedin.com/in/lucascmpus" target="_blank">
                LinkedIn
              </a>
            </m.p>
            <m.p
              whileHover={{
                x: 20,
                transition: { duration: 0.3 },
              }}
              className="text-2xl font-bold w-[400px] text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0]"
            >
              <a href="https://github.com/lucascmpus" target="_blank">
                GitHub
              </a>
            </m.p>
          </div>
        </div>
      </div>

      <Background />
    </>
  );
}

export default Contact;
