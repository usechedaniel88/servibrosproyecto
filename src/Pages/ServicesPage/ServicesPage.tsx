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
              Lorem ipsum, dolor sit amet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut beatae vitae laborum dolorem recusandae harum eius. Tenetur, suscipit nobis. Nostrum laudantium eveniet ut. Sit, ullam aspernatur! Maiores beatae dolore voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique repellat consectetur aspernatur animi laborum distinctio nam, sequi blanditiis quidem voluptatem rem, necessitatibus voluptatibus laboriosam? Iusto, officia quam? Dolor, ducimus.
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
                Lorem ipsum, dolor sit amet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut beatae vitae laborum dolorem recusandae harum eius. Tenetur, suscipit nobis. Nostrum laudantium eveniet ut. Sit, ullam aspernatur! Maiores beatae dolore voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique repellat consectetur aspernatur animi laborum distinctio nam, sequi blanditiis quidem voluptatem rem, necessitatibus voluptatibus laboriosam? Iusto, officia quam? Dolor, ducimus.
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
                Lorem ipsum, dolor sit amet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut beatae vitae laborum dolorem recusandae harum eius. Tenetur, suscipit nobis. Nostrum laudantium eveniet ut. Sit, ullam aspernatur! Maiores beatae dolore voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti similique repellat consectetur aspernatur animi laborum distinctio nam, sequi blanditiis quidem voluptatem rem, necessitatibus voluptatibus laboriosam? Iusto, officia quam? Dolor, ducimus.
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