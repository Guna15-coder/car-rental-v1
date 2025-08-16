import Hero from './components/build/Hero'
import CarData from './components/build/CarData'
import BestDeal from './components/build/BestDeal'
import Feature from './components/build/Feature'
import Footer from './components/build/Footer'

const App = () => {
  return (
    <div className='p-2 font-Inter'>
      <Hero />
      <CarData />
      <BestDeal />
      <Feature />
      <Footer />
    </div>
  )
}

export default App