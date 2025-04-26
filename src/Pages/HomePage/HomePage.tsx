// import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, Container, ImageListItem } from '@mui/material'
// import ChatImage from '../../assets/Images/0lbaprm8.png'
import PerforadoraImage from '../../assets/Images/perforadora.png'
import { Link } from 'react-router-dom';
// carrousel 
import Carousel from 'react-material-ui-carousel';

const images = [
  "https://img.freepik.com/foto-gratis/constructor-industrial-trabaja-amoladora-angular-profesional-cortar-ladrillos-construir-paredes-interiores-electricista_169016-5878.jpg?t=st=1745064383~exp=1745067983~hmac=c3f94875b14ff8da1f10d7a5b5df84a90281dc6a1730476c82e1caa5e06fb1c7&w=996",
  "https://img.freepik.com/foto-gratis/manitas-sitio-construccion-proceso-perforacion-pared-perforador_169016-12112.jpg?t=st=1745064434~exp=1745068034~hmac=909769f561a09cfc7e31a397a20009ba6108963203912c990b35718e38c3dbb8&w=996",
  "https://img.freepik.com/foto-gratis/artesano-proceso-perforar-pared-perforador_169016-51134.jpg?t=st=1745064532~exp=1745068132~hmac=08a053bff37edacaf6345e97f92d3ab574b1ddccab06af46791c22df3a58f2f7&w=1380",
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
                height: '500px',
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
        <br />  Perforaciones en hormigón y otros materiales: Realizamos perforaciones con alta precisión, ya sea en estructuras de hormigón, piedra, acero u otros materiales, utilizando maquinaria avanzada para asegurar la calidad y seguridad en cada trabajo. 
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
        {/* <Link to='https://github.com/usechedaniel88' target="_blank">
        <GitHubIcon 
        color="primary"
        fontSize="large"
        />
        </Link> */}
    </Container>
  )
}

export default Homepage