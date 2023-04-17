import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';

function BackButton() {
  return (
    <>
      <m.button
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        transition={{ duration: 1 }}
        className="absolute top-20 left-20 text-white"
      >
        <Link to="/">
          <IoIosArrowBack />
        </Link>
      </m.button>
    </>
  );
}

export default BackButton;
