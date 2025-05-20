
import { Container } from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


 const Contactpage = () => {
   return (
     <><Container sx={{ margin: '0 auto', textAlign: 'justify' }}>
       <p>
        ¿Tienes un proyecto de obra, remodelación u ampliación estructural? 
¿Necesitas asesoramiento en perforación, corte o demolición técnica de hormigón?
¿Requieres de un servicio de instalación de anclajes para tu proyecto?
En Servibros, estamos listos para acompañarte en cada etapa de tu obra, brindándote soluciones eficientes, seguras y adaptadas a tus necesidades específicas. 
Contamos con un equipo técnico capacitado y con amplia experiencia en el sector, preparado para responder todas tus consultas, coordinar visitas a obra y ofrecerte un servicio rápido y de calidad. 
Nuestro objetivo es facilitar tu trabajo, optimizando tiempos y garantizando profesionalidad de inicio a fin. 
Puedes comunicarte con nosotros por teléfono, WhatsApp o correo electrónico.
Valoramos tu tiempo, por eso nos comprometemos a responderte a la brevedad y con la atención que mereces. 
No dudes en contactarnos. ¡En Servibros, estamos para ayudarte!
       </p>
     </Container>
     <Container sx={{ margin: '0 auto', textAlign: 'center' }}>
         <h1>Contacto</h1>
         <h2>
           <CallIcon
             fontSize="medium"
             color="primary" /> +34 611 69 63 21
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