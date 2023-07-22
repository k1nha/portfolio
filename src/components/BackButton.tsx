import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';

export function BackButton() {
  return (
    <>
      <m.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-5 md:left-[5%] lg:left-20  text-white"
      >
        <Link to="/">
          <IoIosArrowBack />
        </Link>
      </m.button>
    </>
  );
}
