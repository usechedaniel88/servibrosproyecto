// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardActions, Container } from '@mui/material';
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
        textAlign: 'justify',
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
              Perforacion de hormigon 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ofrecemos un servicio especializado de perforación de hormigón con tecnología de punta y personal altamente capacitado, ideal para instalaciones eléctricas, sanitarias, ventilación o cualquier tipo de proyecto que requiera precisión y eficiencia. Trabajamos con distintos diámetros y profundidades, garantizando cortes limpios, seguros y sin vibraciones que puedan dañar la estructura. Nos adaptamos a tus necesidades, ya sea en obras nuevas, remodelaciones o trabajos industriales.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Link to={'#'}>
            <Button size="small" color="primary">
              Link
            </Button>
          </Link> */}
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
                Corte de hormigon
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Brindamos un servicio profesional de corte de hormigón, utilizando equipos de alta precisión para garantizar resultados limpios, seguros y eficientes en todo tipo de estructuras. Realizamos cortes en muros, losas y pavimentos, adaptándonos a las necesidades de cada proyecto, ya sea en obras civiles, industriales o residenciales. Nuestro compromiso es ofrecer soluciones rápidas y efectivas, minimizando el impacto en la estructura existente y cumpliendo con los más altos estándares de calidad.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Link to={'#'}>
              <Button size="small" color="primary">
                Link
              </Button>
            </Link> */}
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
                Demolicion de hormigon
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prestamos un servicio de demolición de hormigón eficiente y seguro, adaptado a todo tipo de obras, ya sean parciales o totales. Contamos con maquinaria especializada y personal calificado para llevar a cabo trabajos controlados, minimizando vibraciones, polvo y ruidos, y garantizando la protección de las estructuras aledañas. Nos enfocamos en cumplir con los plazos acordados y mantener un entorno de trabajo limpio y ordenado.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Link to={'#'}>
              <Button size="small" color="primary">
                Link
              </Button>
            </Link> */}
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}