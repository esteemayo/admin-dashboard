import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { userColumns } from 'data';
import { productInputs, userInputs } from 'formData';
import { useGlobalContext } from 'context/dark/DarkModeContext';
import {
  Home,
  Layout,
  List,
  Login,
  New,
  NotFound,
  SharedLayout,
  Single,
} from 'pages';

import './style/dark.scss';

function App() {
  const { darkMode } = useGlobalContext();

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Router>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='users' element={<Layout />}>
              <Route index element={<List columns={userColumns} />} />
              <Route path=':userId' element={<Single />} />
              <Route
                path='new'
                element={<New inputs={userInputs} title='Add new user' />}
              />
            </Route>
            <Route path='products' element={<Layout />}>
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route
                path='new'
                element={<New inputs={productInputs} title='Add new product' />}
              />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
