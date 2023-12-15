import './App.css';
import './components/styles/style.css';
import './components/styles/commonstyle.css';
import AboutUs from './components/about';
import Services from './components/services';
import Footerhomepage from './components/footerhomepage';


function App() {
  return (
    <div className="App">
      <AboutUs />
      <Services />
      <Footerhomepage />
    </div>
  );
}

export default App;