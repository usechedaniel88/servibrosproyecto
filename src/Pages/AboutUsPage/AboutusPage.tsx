
// import React from 'react'
import './aboutuspage.css'
import { Container, ImageListItem } from '@mui/material'
import AboutusImage from '../../assets/Images/quienessomos.jpg'

// type Props = {}

const AboutusPage = () => {
  return (
    <Container sx={{margin:'0 auto', textAlign: 'center'}}>
        <ImageListItem sx={{minWidth:200, maxWidth: 400, margin:'0 auto', borderRadius:'10px', marginTop:'20px'}} data-aos="fade-left">
            <img style={{borderRadius:'20px'}} src={AboutusImage} alt="ImageAboutus" />
        </ImageListItem>
        <p style={{textAlign:'justify'}}>
        Somos expertos en perforaciones y trabajos técnicos en construcción. 
Nos especializamos en realizar perforaciones de hormigón y otros materiales base, adaptándonos a las necesidades específicas de cada proyecto. Ya sea con perforaciones en estructuras de hormigón, acero u otros materiales combinados, utilizamos maquinaria avanzada y técnicas de vanguardia para garantizar precisión y seguridad en cada trabajo realizado. 
Además, ofrecemos un asesoramiento integral en demoliciones técnicas controladas. Nuestro equipo de profesionales altamente capacitados se encarga de gestionar proyectos de demolición, asegurando que cada proceso se realice de manera vigilada, minimizando riesgos y respetando los plazos establecidos. 
También somos expertos en instalación de anclajes para distintos tipos de cargas y magnitudes en obra; Proporcionamos soluciones personalizadas para cada tipo de proyecto o rehabilitación. Los anclajes instalados por nuestros expertos cuentan con los más altos estándares de calidad durante el proceso de instalación para así garantizar la integridad y durabilidad de las estructuras facilitando ese nivel de seguridad y confianza requerido por quienes nos eligen. 
<br />
<br />
Contamos con equipos y herramientas especializadas que nos permiten llevar a cabo demoliciones de manera eficiente, sin comprometer la seguridad ni la integridad de las estructuras circundantes. 
Nuestra experiencia es uno de los valores que aportamos a nuestros clientes. Contamos con un equipo de profesionales altamente cualificados, con una formación de excelencia proveniente de la industria más potente del sector a nivel mundial. Con más de 20 años de experiencia, estamos comprometidos en ofrecer un servicio que cumpla con los más altos estándares de calidad. 
Nos aseguramos de que cada trabajo, sin importar su tamaño o complejidad, se realice con precisión, eficiencia y respeto por los plazos y compromisos establecidos. Nuestro compromiso es claro: proporcionar un servicio de alta calidad en cada fase del proyecto. Ya sea en la perforación, demolición o instalación de anclajes, trabajamos con dedicación para garantizar que nuestros clientes obtengan resultados excepcionales que superen sus expectativas.
        </p>
    </Container>
  )
}

export default AboutusPage