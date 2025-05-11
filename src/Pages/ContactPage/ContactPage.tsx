
import { Container } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


 const Contactpage = () => {
   return (
     <><Container sx={{ margin: '0 auto', textAlign: 'justify' }}>
       <p>
         ¿Tienes un proyecto en mente o necesitás asesoramiento especializado en perforación, corte o demolición de hormigón? En Servibros, estamos listos para acompañarte en cada etapa de tu obra, brindándote soluciones eficientes, seguras y adaptadas a tus necesidades específicas.
         Contamos con un equipo técnico capacitado y con amplia experiencia en el rubro, preparado para responder todas tus consultas, coordinar visitas a obra y ofrecerte un presupuesto detallado y sin compromiso. Nuestro objetivo es facilitar tu trabajo, optimizando tiempos y garantizando resultados de calidad profesional.
         Puedes comunicarte con nosotros de la manera que te resulte más cómoda: por teléfono, WhatsApp o correo electrónico. Valoramos tu tiempo, por eso nos comprometemos a responderte a la brevedad y con la atención que merecés.
         No dudes en escribirnos. ¡En Servibros, estamos para ayudarte!
       </p>
     </Container>
     <Container sx={{ margin: '0 auto', textAlign: 'center' }}>
         <h1>Contacto</h1>
         <h2>
           <CallIcon
             fontSize="medium"
             color="primary" /> +34 687 37 15 67
         </h2>
         <h2>
           <EmailIcon
             fontSize="medium"
             color="primary" /> administracion@servibros.com
         </h2>
         <h2>
           <LocationOnIcon
             fontSize="medium"
             color="primary" /> Cataluña - España
         </h2>
       </Container></>
   )
 };

 export default Contactpage