import { Link } from 'react-router-dom';
import Background from '../components/Background';

function Home() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center font-Montserrat text-white text-8xl gap-4 text-left font-bold">
        <div className="flex flex-col gap-6 w-[300px]">
          <Link to="/about">
            <p id="hello" className="hover">
              <span>Hello.</span>
            </p>
          </Link>
          <Link to="/projects">
            <p id="iam" className="text-BabyBlue">
              <span className="">I am</span>
            </p>
          </Link>
          <Link to="/contact">
            <p id="lucas" className="w-[400px] text-transparent bg-clip-text bg-gradient-to-r from-[#4cbeff99] to-[#b7e5a2b0]">
              <span>Lucas</span>
            </p>
          </Link>
        </div>
      </div>
      <Background />
    </>
  );
}

export default Home;
