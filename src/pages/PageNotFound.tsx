import { Link } from 'react-router-dom';
import { Background, BackButton } from '@/components';

export function PageNotFound() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center font-Montserrat text-8xl font-bold text-white">
        <p>You are lost?</p>
        <Link className="text-xl  text-BabyBlue font-normal" to="/">
          Come here...
        </Link>
      </div>
      <Background />
    </>
  );
}
