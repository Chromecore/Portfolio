import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './main/Home'
import NotFound from './NotFound'
import ProjectPage from './main/ProjectPage';
import useScrollToID from "./useScrollToID";

function App()
{
  useScrollToID();

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/success' element={<Home success={true} />} />
      <Route path='/error' element={<Home error={true} />} />
      <Route path='/:projectID' element={<ProjectPage />} />
      <Route path="/404" element={<NotFound />} />
      <Route path='*' element={<Navigate to="/404" />} />
    </Routes>
  )
}

export default App