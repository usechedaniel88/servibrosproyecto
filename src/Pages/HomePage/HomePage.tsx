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
  "https://sdmntprukwest.oaiusercontent.com/files/00000000-b310-6243-bfac-fa55ceb84c42/raw?se=2025-04-27T20%3A31%3A34Z&sp=r&sv=2024-08-04&sr=b&scid=6e49ace0-8876-5f6f-a2ac-f119d8366078&skoid=9370dd2b-ca43-4270-bed5-18b1b71f8fa0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-27T07%3A19%3A15Z&ske=2025-04-28T07%3A19%3A15Z&sks=b&skv=2024-08-04&sig=LBvf01axjXO286sFLsSm184BV3XWx7ifNLi%2B74C65so%3D",
  "https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-3060-620a-b86a-313c7803616d/raw?se=2025-04-27T20%3A26%3A20Z&sp=r&sv=2024-08-04&sr=b&scid=22d11799-0823-5f10-b5d4-2b3b72a58118&skoid=9370dd2b-ca43-4270-bed5-18b1b71f8fa0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-27T06%3A17%3A07Z&ske=2025-04-28T06%3A17%3A07Z&sks=b&skv=2024-08-04&sig=mvF/4aaMxB%2BVL%2BkM0bWPDolOG9fqXdagBWyJF4e5Dw0%3D",
  "https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-a1b4-620a-af81-174ae458b274/raw?se=2025-04-27T20%3A28%3A45Z&sp=r&sv=2024-08-04&sr=b&scid=ea8d9e74-d6c0-5efb-989f-4253a35f9d5f&skoid=9370dd2b-ca43-4270-bed5-18b1b71f8fa0&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-27T06%3A11%3A12Z&ske=2025-04-28T06%3A11%3A12Z&sks=b&skv=2024-08-04&sig=WVI2urRdWbex2r0HwDglXjLn2NHmtoUEN9GebKbxsKM%3D",
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
        Somos tu aliado estratégico en proyectos de construcción. Nos especializamos en ofrecer soluciones precisas y efectivas para una variedad de necesidades en obras. Contamos con una amplia experiencia y conocimientos técnicos en las siguientes áreas:
        <br />
        <br />  Perforaciones y cortes en hormigón. Ademas de otros materiales base: Realizamos perforaciones con alta precisión y cortes, ya sea en estructuras de hormigón, piedra, acero u otros materiales, utilizando maquinaria avanzada para asegurar la calidad y seguridad en cada trabajo. 
        <br />
        <br />  Demoliciones técnicas: Nos encargamos de demoliciones controladas y especializadas, garantizando que el proceso se lleve a cabo de manera segura y eficiente, minimizando riesgos y tiempos de ejecución.
        <br />
        <br />  Instalación de anclajes en obra: Instalamos anclajes de forma profesional y segura, adaptados a las necesidades específicas de cada proyecto para asegurar la estabilidad y durabilidad de las estructuras.
        <br />
        <br />  Trabajamos contigo, combinando nuestra experiencia y tecnología de vanguardia para incrementar tu productividad. Nuestro objetivo es simplificar cada fase del proceso, proporcionando soluciones personalizadas que respondan a tus necesidades particulares, maximizando la eficiencia y reduciendo costos.
        Innovación y compromiso son nuestros pilares. Nos esforzamos por crear valor para nuestros clientes, brindando soluciones técnicas innovadoras y de alta calidad dentro de la industria de la construcción. Gracias a nuestro equipo altamente capacitado y el uso de maquinaria especializada, nos aseguramos de que cada proyecto se lleve a cabo con los más altos estándares de calidad y seguridad.
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