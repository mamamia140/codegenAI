import React, { Component } from 'react';
//import {Link} from "react-router-dom";
import '../stylesheets/Content.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

export class Content extends Component {
  render() {
    return(
    <div className='container'>
         <div className='left-container'>
          <Button variant="contained">Hello world</Button>
          <Button variant="contained">Hello world</Button>
          <Button variant="contained">Hello world</Button>
          <Button variant="contained">Hello world</Button>
          
         </div>
        <div className='right-container'>
          <div className='response-container'>
            
          </div>
          <div className='input-container'>
            <TextField  sx={{m:0, width: '80%' }} id="outlined-multiline-flexible" placeholder='Wish me' multiline maxRows={4}/>
          </div>
            
        </div>
    </div>
    )
  }
}
export default Content;