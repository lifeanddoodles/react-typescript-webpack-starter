import { Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import PageWrapper from './layout/PageWrapper'
import { Home } from './pages/Home'
import NotFound from './pages/NotFound'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route index element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  )
}
