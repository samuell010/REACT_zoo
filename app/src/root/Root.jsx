
import { Outlet } from 'react-router-dom';
import Header from '../component/Header.jsx';
import Footer from '../component/Footer.jsx';

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
