import Image from "next/image";
import styles from "./page.module.css";
import FormularioAlumno from "./FormularioAlumno";

export default function Home() { //se borra todo el html 
  return (
    <> 
         <h1>Hola</h1>
         <p
         
          style={{backgroundColor: 'red'}}>Mundo</p>
          <FormularioAlumno/>


    </>
 
    
  );
}
