import { Box } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <Box>
      <Navbar />
      <MainRoutes />
    </Box>
  );
}

export default App;
