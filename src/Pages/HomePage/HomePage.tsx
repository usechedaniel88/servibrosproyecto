// import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
// import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, Container, ImageListItem } from '@mui/material'
// import ChatImage from '../../assets/Images/0lbaprm8.png'
import PerforadoraImage from '../../assets/Images/perforadora.png'
import { Link } from 'react-router-dom';
// carrousel 
import Carousel from 'react-material-ui-carousel';

const images = [
  "https://img.freepik.com/vector-gratis/proximamente-texto-sobre-fondo-oscuro-amanecer-abstracto-efecto-movimiento_157027-1073.jpg?t=st=1745772881~exp=1745776481~hmac=d5e93c9985fb3618d42290319a0e604bfb776f418407da90c2bb9e5c86974a05&w=1060",
  "https://img.freepik.com/foto-gratis/simbolo-desinstalacion_53876-120808.jpg?t=st=1745772996~exp=1745776596~hmac=30499989b3d6aba688f076a90a2f2c24c4dffd4c9ae2ce2db7df51f4c55c0f95&w=1060",
  "https://img.freepik.com/vector-gratis/ilustracion-realista-icono-vectorial-elemento-barra-progreso-verde-actualizaciones-software-juegos-l_134830-2213.jpg?t=st=1745773045~exp=1745776645~hmac=4e423aa4548ee4df1e62f33b904d8bc77aca582203a5895cafbeed69f2449384&w=1380",
];

const Homepage = () => {
  return ( 
    <Container sx={{margin:'0 auto', textAlign: 'center'}}> 
      <Box sx={{ maxWidth: 1000, flexGrow: 1, margin: 'auto', mt: 5 }}>
        <Carousel>
          {images.map((image, i) => (
            <Box
              component="img"
              sx={{
                width: '100%',
                height: '600px',
                objectFit: 'cover'
              }}
              src={image}
              alt={`Slide ${i}`}
            />
          ))}
        </Carousel>
      </Box>       
        <p style={{textAlign:'justify'}}>
        Somos tu aliado estratégico en proyectos de construcción. Nos especializamos en ofrecer soluciones precisas y efectivas para una variedad de necesidades en obras civiles. Contamos con una amplia experiencia y conocimientos técnicos en las siguientes áreas:
        <br />
        <br />  Perforaciones y cortes en hormigón y otros materiales: Realizamos perforaciones y cortes con alta precisión, ya sea en estructuras de hormigón, piedra, acero u otros materiales, utilizando maquinaria avanzada para asegurar la calidad y seguridad en cada trabajo. 
        <br />
        <br />  Demoliciones técnicas: Nos encargamos de demoliciones controladas y especializadas, garantizando que el proceso se lleve a cabo de manera segura y eficiente, minimizando riesgos y tiempos de ejecución.
        <br />
        <br />  Instalación de anclajes en obra: Instalamos anclajes de forma profesional y segura, adaptados a las necesidades específicas de cada proyecto para asegurar la estabilidad y durabilidad de las estructuras.
        <br />
        <br />  Trabajamos juntos contigo, combinando nuestra experiencia y tecnología de vanguardia para incrementar tu productividad. Nuestro objetivo es optimizar cada fase del proceso, proporcionando soluciones personalizadas que respondan a tus necesidades particulares, maximizando la eficiencia y reduciendo costos.
        Innovación y valor añadido son nuestros pilares. Nos esforzamos por crear valor para nuestros clientes, brindando soluciones técnicas innovadoras y de alta calidad dentro de la industria de la construcción. Gracias a nuestro equipo altamente capacitado y el uso de maquinaria especializada, nos aseguramos de que cada proyecto se lleve a cabo con los más altos estándares de calidad y seguridad.
        Tu éxito es nuestra prioridad, y trabajamos con dedicación para superar tus expectativas en cada desafío.
        </p>
        <Button 
        variant="contained"
        sx={{color:'white !important', marginTop: '20px', marginBottom: '20px', padding: '10px 20px', borderRadius: '5px', textTransform: 'uppercase'}}
        href="./contact" target="_blank"
        > SOLICITA TU PRESUPUESTO</Button>
        <ImageListItem sx={{minWidt:80, maxWidth: 200, margin:'0 auto', borderRadius:'10px', marginTop:'20px', marginBottom: '20px'}} data-aos="fade-left">
          <img style={{borderRadius:'20px'}} src={PerforadoraImage} alt="ChatImage" />
        </ImageListItem>
        <p>Siguenos a traves de las redes sociales</p>
        <Link to='https://www.instagram.com' target="_blank">
        <InstagramIcon
        fontSize="large"
        color="primary"
        />
        </Link>
        <Link to='https://www.linkedin.com' target="_blank">
        <LinkedInIcon 
        color="primary"
        fontSize="large"
        />
        </Link>
        <Link to='https://www.facebook.com' target="_blank">
        <FacebookIcon 
        color="primary"
        fontSize="large"
        />
        </Link>
        <Link to='https://www.facebook.com' target="_blank">
        <XIcon
        color="primary"
        fontSize="large"
        />
        </Link>
    </Container>
  )
}

export default Homepage