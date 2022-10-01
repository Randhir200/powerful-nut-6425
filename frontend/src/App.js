import { Box } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Dashbord from './Pages/Dashbord';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className='App'>
      {/* <Navbar />
      <MainRoutes />
      <Footer /> */}
     <Dashbord/>
    </div>
  );
}

export default App;
