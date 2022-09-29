import './App.css';
import HomeAppCarousel from './Components/HomeAppCarousel';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
