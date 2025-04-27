// import React from 'react'
import { Container } from '@mui/material'
import BannerImage from '../../assets/Images/Banner1.png'
import { Link } from 'react-router-dom';

// type Props = {}

const Banner = () => {
  return (
    <>
      <Container sx={{backgroundColor:'#ffffff'}}>
          <Link to='/' style={{color:'#000000', textDecoration:'none'}}>
              <img style={{minWidth:'10%', height:'100px'}} src={BannerImage} alt='Banner' />
          </Link>
      </Container>
    </>
  )
}

export default Banner