import { useLanguageContext } from '@/contexts';
import { BackgroundLayout } from '@/layouts';
import { motion as m } from 'framer-motion';
import { toast } from 'react-hot-toast';

const underlineEffect =
  "relative before:content-[''] before:absolute before:block  before:h-[2px] before:bottom-0 before:left-0 before:bg-white before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-300";

export function AboutPage() {
  const { t } = useLanguageContext();

  return (
    <BackgroundLayout>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-Montserrat text-white p-5 md:p-0 text-xs md:text-base">
          {/* ABOUT */}
          <div className="flex flex-col gap-4 flex-wrap max-w-[750px] ">
            <div className="text-lg md:text-2xl font-bold flex justify-between">
              <h1>{t('ola-1')}</h1>

              <m.button
                whileHover={{
                  x: -20,
                  transition: { duration: 0.3 },
                }}
                className="text-lg md:text-xl text-right text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0]"
              >
                <a href="#" onClick={()=> toast(t('mensagem-curriculo'))}>{t('curriculo')}</a>
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
                <li className="text-base md:text-xl">{t('eternal')}</li>
                <p>{t('eternal-1')}</p>
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
    </BackgroundLayout>
  );
}
