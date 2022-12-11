import './App.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import image from "./images/tents2.jpg"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box>
          <img src={image} width="100%" />
          Daniel Finger
        </Box>
      </header>
    </div>
  );
}

export default App;
