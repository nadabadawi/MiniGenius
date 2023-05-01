import * as React from 'react';
import Paper from '@mui/material/Paper';import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './styles.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useLocation } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);



export default function PageTwo(props) 
{
  const location=useLocation();

  const data=location?.state?.data;
  return (
    <>
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


    {/* <Paper style = {
      {
          padding: 20,
maxWidth: "50%",  
marginRight: 'auto',
marginLeft: '0',
          margin: 20,
          display : 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          backgroundColor: '#F4F1DE'

      }
  }> */}
    

    <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',  
          paddingRight:"25%",
          paddingLeft:"25%",
          
        }}
      >
    <Card sx={{ minWidth: 275 }} elevation={5}  >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Here Is What I got!
        </Typography>
        <Typography variant="body2" sx={{textAlign:"left",
       
      
      }}>{data}</Typography> 
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     </Box>
    {/* </Paper> */}
    </>
    
  );
}