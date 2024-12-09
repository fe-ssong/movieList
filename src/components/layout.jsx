import { Outlet } from 'react-router-dom';
import NavBar from './navBar';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <main>
      <Outlet />
      </main>
    </div>
  );
};

export default Layout;