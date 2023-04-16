import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <>
      <button className='absolute top-20 left-20 text-white'>
        <Link to='/'>
          <IoIosArrowBack />
        </Link>
      </button>
    </>
  );
}

export default BackButton;
