import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ESG from '../pages/ESG/ESG'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/esg" element={<ESG />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
