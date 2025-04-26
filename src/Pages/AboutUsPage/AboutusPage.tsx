
// import React from 'react'
import './aboutuspage.css'
import { Container, ImageListItem } from '@mui/material'
import AboutusImage from '../../assets/Images/quienessomos.jpg'

// type Props = {}

const AboutusPage = () => {
  return (
    <Container>
        <ImageListItem sx={{minWidth:200, maxWidth: 400, margin:'0 auto', borderRadius:'10px', marginTop:'20px'}} data-aos="fade-left">
            <img style={{borderRadius:'20px'}} src={AboutusImage} alt="ImageAboutus" />
        </ImageListItem>
        <p style={{textAlign:'justify'}}>
        Somos expertos en perforaciones y trabajos técnicos en construcción. Nos especializamos en realizar perforaciones de hormigón y otros materiales base, adaptándonos a las necesidades específicas de cada proyecto. Ya sea que se trate de perforaciones en estructuras de hormigón, piedra, acero u otros materiales resistentes, utilizamos maquinaria avanzada y técnicas de vanguardia para garantizar precisión y seguridad en cada trabajo realizado.

Además, ofrecemos un asesoramiento integral en demoliciones técnicas controladas. Nuestro equipo de profesionales altamente capacitados se encarga de gestionar proyectos de demolición, asegurando que cada proceso se realice de manera controlada, minimizando riesgos y respetando los plazos establecidos. Contamos con equipos y herramientas especializadas que permiten llevar a cabo demoliciones de manera eficiente, sin comprometer la seguridad ni la integridad de las estructuras circundantes.

También somos expertos en instalación de anclajes en obra, proporcionando soluciones personalizadas para cada tipo de proyecto. Nuestros anclajes son instalados con los más altos estándares de seguridad y precisión, garantizando la estabilidad y durabilidad de las estructuras, sean estas parte de obras nuevas o proyectos de rehabilitación.

Nuestra experiencia es nuestro mayor valor. Contamos con un equipo de profesionales altamente cualificados, con una formación de excelencia proveniente de la industria más potente del sector a nivel mundial. Con más de 20 años de experiencia, estamos comprometidos en ofrecer un servicio que cumpla con los más altos estándares de calidad. Nos aseguramos de que cada trabajo, sin importar su tamaño o complejidad, se realice con precisión, eficiencia y respeto por los plazos y presupuesto establecidos.

Nuestro compromiso es claro: proporcionar un servicio de alta calidad en cada fase del proyecto. Ya sea en la perforación, demolición o instalación de anclajes, trabajamos con dedicación para garantizar que nuestros clientes obtengan resultados excepcionales que superen sus expectativas.

        </p>
    </Container>
  )
}

export default AboutusPage