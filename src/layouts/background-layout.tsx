import { BackButton, Background } from '@/components';
import { useLanguageContext } from '@/contexts';
import { HiOutlineLanguage } from 'react-icons/hi2';
import { motion as m } from 'framer-motion';

type BackgroundLayoutProps = {
  children: React.ReactNode;
  disabledButton?: boolean;
};

export function BackgroundLayout({
  children,
  disabledButton,
}: BackgroundLayoutProps) {
  const { handleChangeLanguage } = useLanguageContext();

  return (
    <>
      {!disabledButton && (
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
        </>
      )}

      {children}

      <Background />
    </>
  );
}
