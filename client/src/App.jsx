import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Create from './views/Create'
import Edit from './views/Edit'
import Info from './views/Info'
import ComparisonPage from './views/ComparisonPage'
function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/character/:id/edit' element={<Edit />} />
        <Route path='/character/:id/details' element={<Info />} />
        <Route path='/comparison' element={<ComparisonPage />} />
      </Routes>
    </div>
  )

}

export default App
