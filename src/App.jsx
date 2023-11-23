import './App.css'
import Card from './components/Card'

function App() {
  return (
    <main className='min-h-screen mx-2 my-8 xs:mx-6 xs:my-24 lg:mx-0 lg:my-0 lg:flex lg:justify-center lg:items-center'>
      <div className='rounded-xl overflow-hidden lg:w-[850px] lg:flex'>
        <Card title="sedans" text="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." color="hsl(31,77%,52%)" />
        <Card title="suvs" text="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures." color="hsl(184,100%,22%)" />
        <Card title="luxury" text="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." color="hsl(179,100%,13%)" />
      </div>
    </main>
  )
}

export default App
