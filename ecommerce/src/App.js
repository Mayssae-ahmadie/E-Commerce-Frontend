import './App.css';
import './components/styles/style.css';
import './components/styles/commonstyle.css';
import AboutUs from './components/about';
import Services from './components/services';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <AboutUs />
      <Services />
      <Footer />
    </div>
  );
}

export default App;