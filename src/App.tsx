import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import ProducerAdvantage from './components/ProducerAdvantage';
import Process from './components/Process';
import Story from './components/Story';
import Reviews from './components/Reviews';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';
import StickyCart from './components/StickyCart';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <ProducerAdvantage />
        <Process />
        <Story />
        <Reviews />
        <Sustainability />
      </main>
      <Footer />
      <StickyCart />
    </div>
  );
}

export default App;
