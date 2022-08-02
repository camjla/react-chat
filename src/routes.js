import { Route, Routes } from 'react-router-dom';
import { Contacts } from './components/Contacts';
import { Home } from './pages/Home';
import { Messages } from './pages/Messages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/messages' element={<Messages />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
  );
};
