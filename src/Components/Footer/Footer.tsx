import { Container, Typography } from '@mui/material'
// import React from 'react'

// type Props = {}

const Footer = () => {
  return (
    <Container
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '60px',
        marginTop: '80px',
        gap: '20px',
      }}
    >
    <Typography variant="body1">
      &copy; {new Date().getFullYear()} Servibros. Todos los derechos reservados.
    </Typography>
</Container>
  )
}

export default Footer