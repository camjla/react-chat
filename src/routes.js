import { Routes, Route } from "react-router-dom"
import { Messages } from "./pages/Messages"

export const AppRoutes = () => {

  return(
    <Routes>
      <Route path="/messages" element={<Messages />} />
    </Routes>
  )
}