import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Messages } from './pages/Messages'
import { AdressBook } from './pages/Adress-book'
import { Fav } from './pages/Favorites'
import { Setting } from './pages/Settings'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/contactsadress" element={<AdressBook />} />
      <Route path="/favorites" element={<Fav />} />
      <Route path="/settings" element={<Setting />} />
    </Routes>
  )
}
