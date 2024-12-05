'use client'
import React, { useState } from 'react'



export const FormularioAlumno = () =>{
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState(0)
    const [correo, setCorreo] = useState("")
  return (
    <>
      <p>Nombre: {nombre}</p>

      <hr />
      <form>
        <label>Nombre</label><br />
        <input type="text"  placeholder='ingrese nombre' onClick={(e)=>{setNombre(e.currentTarget.value)}}/>
        <label>Apellido</label>
        <input type="text"  placeholder='ingrese apellido' onClick={(e)}=>{}/>
        <label>Edad</label>
        <input type="number" placeholder='ingrese edad' />
        <label>Correo</label>
        <input type="email" placeholder='Ingrese correo' />
        <button type='button'>Registrar</button>
      </form>
    </>
  )
}
export default FormularioAlumno
