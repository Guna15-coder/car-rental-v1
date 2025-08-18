import CarDetail from './components/build/CarDetail'
import Hero from './components/build/Hero'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Results from './components/build/Results'

const App = () => {
  return (
    <BrowserRouter>
    <div className='p-2 font-Inter'>
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/car' element={<CarDetail />} />
      <Route path='/result' element={<Results />} />
    </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App