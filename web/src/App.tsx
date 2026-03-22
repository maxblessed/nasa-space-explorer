import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './app/layouts/MainLayout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Gallery from './pages/Gallery'

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
