import logo from './logo.svg';
import './App.css';
import Process from './components/Process';
import SplineLayout from './components/SplineLayout';
import WhuUs from './components/WhuUs';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import About from './components/Aboutus';
import Footer from './components/Footer';
import Contact from './components/Contact'
import ConstructionChatbot from './chatbot/ConstructionChatbot';

function App() {
  return (
    <div >
      {/* <Header />
      <Banner />
      <SplineLayout />
      <Services />
      <About />
      <WhuUs />
      <Process />
      <Contact />
      <Footer /> */}
      <ConstructionChatbot />

    </div>
  );
}

export default App;
