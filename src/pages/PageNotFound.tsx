import { Background } from '@/components';
import { useLanguageContext } from '@/contexts';
import { Link } from 'react-router-dom';

export function PageNotFound() {
  const { t } = useLanguageContext();
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center font-Montserrat text-5xl md:text-8xl font-bold text-white">
        <p className="text-center">{t('perdido')}</p>
        <Link className="text-xl  text-BabyBlue font-normal" to="/">
          {t('perdido-1')}
        </Link>
      </div>
      <Background />
    </>
  );
}
