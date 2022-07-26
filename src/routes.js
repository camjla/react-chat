import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Messages } from "./pages/Messages"

export const AppRoutes = () => {

  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/messages" element={<Messages />} />
    </Routes>
  )
}