import { Box } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <Box className='App'>
      <MainRoutes />
    </Box>
  );
}

export default App;
