
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, laudantium recusandae fuga vel laborum aut neque, voluptate tempora dolore harum rem odit perferendis quisquam suscipit doloribus autem reiciendis molestiae atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, in dolorum fugit, reiciendis laborum, dolor possimus ducimus unde veritatis eum adipisci nihil labore. Praesentium, natus. Voluptate excepturi a perspiciatis nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, perspiciatis perferendis eveniet quaerat libero magni hic voluptatibus quo iure illum nam esse laboriosam enim necessitatibus ex impedit consequuntur corporis obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores consequatur harum odio dolor, ea molestias id, saepe blanditiis cupiditate error delectus at dolore rerum commodi qui alias. Blanditiis, tempore?
        </p>
        {/* <section className="skills" id="skills" style={{borderRadius: '20px'}}>
                <div className="contenido-seccion">
                    <div className="fila">
                        <div className="col">
                            <h3>Nuestros objetivos</h3>
                            <div className="skill">
                                <span>Comunicacion</span>
                                <div className="barra-skill">
                                    <div className="progreso comunicacion">
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Compromiso</span>
                                <div className="barra-skill">
                                    <div className="progreso trabajo-en-equipo">
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Profesionalismo</span>
                                <div className="barra-skill">
                                    <div className="progreso creatividad">
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Dedicacion</span>
                                <div className="barra-skill">
                                    <div className="progreso dedicacion">
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>Responsabilidad</span>
                                <div className="barra-skill">
                                    <div className="progreso responsabilidad">
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </section> */}
    </Container>
  )
}

export default AboutusPage