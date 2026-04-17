import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Banner from './pages/Banner';
import GetStarted from './pages/GetStarted';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
    <Header /> 
    <Banner />
    {/* <Test />
    <Movies /> */}
    <GetStarted />
    <Footer />
    </div>
    
  );
}

export default App;

