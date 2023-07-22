import { useLanguageContext } from '@/contexts';
import { useHover } from '@/hooks';
import { BackgroundLayout } from '@/layouts';
import { motion as m } from 'framer-motion';
import toast from 'react-hot-toast';

export function ContactPage() {
  const { t } = useLanguageContext();

  const { hovering, onHoverProps } = useHover();

  const copyEmail = () => {
    navigator.clipboard.writeText('lucascmpusdev@gmail.com');
    toast.success(t('email'));
  };

  return (
    <BackgroundLayout>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-Montserrat text-white p-5 md:p-0 text-xs md:text-base">
        {/* CONTACT */}
        <div className="flex flex-col gap-4 flex-wrap w-full md:max-w-[750px] justify-between">
          <h1 className="text-2xl md:text-5xl font-bold">{t('contato')}</h1>

          <p className="md:text-lg max-w-[350px] md:max-w-[750px]">
            {t('contato-1')}
          </p>

          <p className="md:text-lg max-w-[350px] md:max-w-[750px]">
            {t('contato-2')}
          </p>
          <p className="md:text-lg max-w-[350px] md:max-w-[750px]">
            {t('contato-3')}
          </p>

          <div className="flex flex-col gap-4">
            <m.p
              id="email"
              whileHover={{
                x: 20,
                transition: { duration: 0.3 },
              }}
              className="text-xl md:text-2xl font-bold md:w-[400px] text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0] cursor-pointer"
              onClick={() => copyEmail()}
              {...onHoverProps}
            >
              {!hovering ? <>Email</> : <>{t('copia')}</>}
            </m.p>
            <m.p
              whileHover={{
                x: 20,
                transition: { duration: 0.3 },
              }}
              className="text-xl md:text-2xl font-bold md:w-[400px] text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0]"
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
              className="text-xl md:text-2xl font-bold md:w-[400px] text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0]"
            >
              <a href="https://github.com/lucascmpus" target="_blank">
                GitHub
              </a>
            </m.p>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
}
