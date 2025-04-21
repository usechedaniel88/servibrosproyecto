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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quaerat repellat dolorem enim, ad dicta! Minima nobis est sunt soluta, nesciunt quae recusandae incidunt at et quaerat quos exercitationem ipsam. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maxime dolor quidem. Fugiat repudiandae deserunt, quasi enim sunt neque, blanditiis pariatur ad quisquam eum ipsa autem, ipsam non exercitationem sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum nihil impedit nostrum sit libero beatae repellendus fugit possimus provident, ad animi aperiam excepturi nesciunt odio atque quidem tempore a? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas itaque quisquam fugit aut. Saepe minima hic consectetur non illo ab magni repudiandae repellat, iusto rerum facere nihil dolorum eum eius! Lorem ipsum dolor sit amet consectetur adipisicing elit. At facilis necessitatibus alias deserunt, blanditiis doloribus sed doloremque odio, labore maxime earum libero dolorem cupiditate. Tenetur fugit cumque natus aliquid autem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestiae id dignissimos? Omnis praesentium optio harum odit exercitationem sunt! Corporis reiciendis tempore voluptatum accusamus ipsa quia reprehenderit corrupti tempora doloremque. lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tempore praesentium. Enim, asperiores deleniti accusantium minima perferendis, labore ea nesciunt nobis voluptate aspernatur incidunt dolores ut qui adipisci omnis nostrum. ,Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequatur explicabo consectetur rerum omnis, dolore nulla neque tenetur, sequi ducimus officiis quod illo corporis pariatur suscipit veniam animi tempore in! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quae esse neque quis tempora quos assumenda quisquam doloribus, veniam voluptas nostrum voluptatibus, harum corporis! Sint maxime a reiciendis eveniet delectus. 
        </p>
        <Button 
        variant="contained"
        sx={{color:'white !important'}}
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