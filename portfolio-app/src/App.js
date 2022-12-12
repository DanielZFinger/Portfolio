import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react";
// import { Link } from 'react-router-dom'
// import {useEffect, useState} from 'react';

function App() {
    // let navigate = useNavigate();
    // const routeChangeGitHub = () =>{ 
    //   let path = `https://github.com/DanielZFinger`; 
    //   navigate(path);
    // }
    // const routeChangeLinkedIn = () =>{ 
    //   let path = `https://www.linkedin.com/in/daniel-finger/`; 
    //   navigate(path);
    // }
    return(
    <div className="App">
      <header className="App-header">
        <Box style={{alignItems: 'start', justifyContent: 'start', flex:1}}>
          <span className="font-link">
            <Typography sx={{mt: "10%",fontSize:"80%"}}><p>Hey, my name is</p></Typography>
          </span>
          <Typography sx={{fontSize:"100%", color:"orange"}}><h1>Daniel Finger</h1></Typography>

          <Typography sx={{mt: "30%",fontSize:"100%", color:"orange"}}><h4>Skills</h4></Typography>
          <Typography className="spacing" sx={{width: "100%",fontSize:"60%", color:"orange"}}><h4>C | C++ | C# | Python | Java | JavaScript | CSS | HTML</h4></Typography>
          <Button sx={{mt:"10%", fontSize:"100%",color:"orange"}} >GitHub</Button>
          <Button sx={{mt:"10%", fontSize:"100%",color:"orange"}} >LinkedIn</Button>
        </Box>
      </header>
    </div>
  );
}

export default App;
