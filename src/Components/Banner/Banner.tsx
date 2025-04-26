// import React from 'react'
import { Container } from '@mui/material'
import BannerImage from '../../assets/Images/Banner2.jpg'

// type Props = {}

const Banner = () => {
  return (
    <>
    <Container sx={{backgroundColor:'#ffffff'}}>
        <img style={{minWidth:'10%', height:'100px'}} src={BannerImage} alt='Banner' />
    </Container>
    </>
  )
}

export default Banner