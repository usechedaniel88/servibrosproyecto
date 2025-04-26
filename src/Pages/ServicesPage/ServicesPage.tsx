// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Servicios1 from '../../assets/Images/servicios1.jpg'
import Servicios2 from '../../assets/Images/servicios2.jpg'
import Servicios3 from '../../assets/Images/servicios3.jpg'

export default function ServicesPage() {
  return (
    <Container>
      <Box
      sx={{ 
        width: '100%',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: { xs: 'center', sm: 'center' },
        marginTop:'40px',
        gap: '40px',
      }}
      >   
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="240"
            image={Servicios1}
            alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pulidos en hormigon 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ofrecemos un servicio de pulido de hormigón de alta calidad que transforma cualquier superficie de concreto en una obra de arte funcional. Ya sea que necesites renovar un espacio comercial, industrial o residencial, nuestro servicio de pulido no solo mejora la estética de tus pisos, sino que también aumenta su durabilidad y facilita su mantenimiento.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={'#'}>
            <Button size="small" color="primary">
              Link
            </Button>
          </Link>
        </CardActions>
      </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={Servicios2}
              alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Fresados en hormigon
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Proporcionamos un servicio especializado de fresado de hormigón diseñado para cumplir con las exigencias más altas de precisión y calidad. Ya sea para preparar una superficie para una nueva capa de pavimento, eliminar imperfecciones o crear un acabado específico, nuestro servicio de fresado es ideal para proyectos de construcción, renovación o mantenimiento.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={'#'}>
              <Button size="small" color="primary">
                Link
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={Servicios3}
              alt="green iguana" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Impermeabilizaciones
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Brindamos soluciones completas para la reparación, refuerzo e impermeabilización de estructuras de hormigón, asegurando la integridad y longevidad de tus edificaciones. Sabemos que las estructuras de hormigón pueden verse afectadas por el paso del tiempo, el desgaste, las inclemencias del clima o problemas de diseño, por lo que nuestro equipo está preparado para abordar cualquier desafío con tecnología avanzada y un enfoque profesional.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={'#'}>
              <Button size="small" color="primary">
                Link
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}