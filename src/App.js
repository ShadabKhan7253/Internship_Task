import { useState } from 'react';
import { Drawer } from './components/Layouts/Drawer/Drawer';
import SideBar from './components/Layouts/SideBar/SideBar';
import AppRoutes from './routes/AppRoutes';
import { useFetch } from './hooks/useFetch';

function App() {
  const [activeMenu, setActiveMenu] = useState(false);
  const { data } = useFetch(
    'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'
  );

  const handleMenuClick = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <>
      {/* app */}
      <div className="art-app">
        {/* mobile top bar */}
        <div className="art-mobile-top-bar"></div>

        {/* app wrapper */}
        <div className="art-app-wrapper">
          {/* app container end */}
          <div className="art-app-container">
            <SideBar activeMenu={activeMenu} handleMenuClick={handleMenuClick} data={data} />
            <AppRoutes data={data} />
            <Drawer activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
          </div>
          {/* app container end */}
        </div>
        {/* app wrapper end */}
      </div>
      {/* app end */}
    </>
  );
}

export default App;
