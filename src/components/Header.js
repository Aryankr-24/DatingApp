import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import {IconButton} from '@mui/material';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
  return (
    <div className='tinder-header'>
      <IconButton className='header-ocons' fontSize='large'>
      <PersonIcon fontSize='large'/>
      </IconButton>
      <img src={logo} alt="hero"/>
      <IconButton className='header-ocons' fontSize='large'>
      <ForumIcon className='header-icons' fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default Header
