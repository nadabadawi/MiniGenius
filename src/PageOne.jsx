import * as React from 'react';
import Button from '@mui/material/Button';
//import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './styles.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function PageOne(props) {
  
  // const [data, setData] = React.useState("");
  // const history = useHistory();
  const navigate=useNavigate();

    const handleClick = async (text) => {
        const response = await fetch('http://127.0.0.1:5000/', {
          method: 'POST',
          body: JSON.stringify({ prompt: text }),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => response.json())
        .then(data => {
          // console.log(data);
          // setData(data);
        navigate('/PageTwo', {state: {data: data}});



        });

      };
  return (
    <Paper style = {
        {
            padding: 20,
            margin: 20,
            display : 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            backgroundColor: '#F4F1DE'

        }
    }>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  sx={{width: '100%', backgroundColor: '#49919D'}} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Study Buddy
          </Typography>
          <Button color="inherit">Log out</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Box sx={{ width: '100%' , height: 'calc(100% - 90px)'}}>

      <Grid container rowSpacing={3} sx={{ alignItems: 'center' }}>
      <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button 
         variant='contained' 
         onClick={() => handleClick('Long Division')} 
         sx={{ width: '90%' }}
         className='c-button' >
          Long Devision
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button
         variant='contained' 
         onClick={() => handleClick('Pointers')} 
         sx={{ width: '90%' }} 
         className='c-button'>
          Pointers
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button 
         variant='contained' 
         onClick={() => handleClick('Design Patterns')} 
         sx={{ width: '90%' }}
         className='c-button'>
          Design Patterns
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button 
         variant='contained' 
         onClick={() => handleClick('Recursion')}  
         sx={{ width: '90%' }} 
         className='c-button'>
          Recursion
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button 
         variant='contained' 
         onClick={() => handleClick('Backtracking')} 
         sx={{ width: '90%' }} 
         className='c-button'>
          Backtracking
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button 
         variant='contained' 
         onClick={() => handleClick('Fourier Transforms')}
         sx={{ width: '90%' }} 
         className='c-button'>
          Fourier Transforms
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button 
         variant='contained' 
         onClick={() => handleClick('Cell Anatomy')}
         sx={{ width: '90%' }} 
         className='c-button'>
          Cell Anatomy
        </Button>
      </Grid>
      <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button 
        variant='contained' 
        onClick={() => handleClick('Message Passing and Concurrency')}
        sx={{ width: '90%' }} 
        className='c-button'>
         Message Passing and Concurrency
        </Button>
      </Grid>
    </Grid>
    </Box>


    </Paper>

  );
}