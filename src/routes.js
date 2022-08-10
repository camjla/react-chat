import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Messages } from './pages/Messages';
import { AdressBook} from './pages/Adress-book';
import { Fav} from './pages/Favorites';
import { Trash } from './pages/Trash';


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/messages' element={<Messages />} />
      <Route path='/adress-book' element={<AdressBook />} />
      <Route path='/favorite' element={<Fav />} />
      <Route path='/trash' element={<Trash/>} />
      
    </Routes>
  );
};
