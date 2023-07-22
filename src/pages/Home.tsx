import { useLanguageContext } from '@/contexts';
import { useHover } from '@/hooks';
import { BackgroundLayout } from '@/layouts';
import { motion as m } from 'framer-motion';
import { Link } from 'react-router-dom';

export function HomePage() {
  const { hovering: hoverHello, onHoverProps: onHoverHello } = useHover();
  const { hovering: hoverIam, onHoverProps: onHoverIam } = useHover();
  const { hovering: hoverContact, onHoverProps: onHoverContact } = useHover();

  const { t } = useLanguageContext();
  return (
    <BackgroundLayout disabledButton={true}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-Montserrat text-white text-7xl md:text-8xl gap-4 text-left font-bold">
          <div className="flex flex-col gap-6 w-[300px]">
            <Link to="/about">
              <m.p
                whileHover={{
                  x: 20,
                  transition: { duration: 0.3 },
                }}
                id="hello"
                className="hover"
                {...onHoverHello}
              >
                {!hoverHello ? <>{t('ola')}</> : <>{t('ola-1')}</>}
              </m.p>
            </Link>
            <Link to="/projects">
              <m.p
                whileHover={{
                  x: 20,
                  transition: { duration: 0.3 },
                }}
                id="iam"
                className="text-BabyBlue md:w-[460px]"
                {...onHoverIam}
              >
                {!hoverIam ? <>{t('eu-sou')}</> : <>{t('eu-sou-1')}</>}
              </m.p>
            </Link>
            <Link to="/contact">
              <m.p
                whileHover={{
                  x: 20,
                  transition: { duration: 0.3 },
                }}
                id="lucas"
                className="md:w-[400px] text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0]"
                {...onHoverContact}
              >
                {!hoverContact ? <>Lucas</> : <>{t('lucas')}</>}
              </m.p>
            </Link>
          </div>
        </div>
      </m.div>
    </BackgroundLayout>
  );
}
