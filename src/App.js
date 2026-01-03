import logo from './logo.svg';
import './App.css';
import Process from './components/Process';
import WhuUs from './components/WhuUs';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/Aboutus';
import Footer from './components/Footer';
import Contact from './components/Contact'

function App() {
  return (
    <div >
      <Header />
      <Banner />
      {/* <SplineLayout /> */}
      <Services />
      <About />
      <WhuUs />
      <Process />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
