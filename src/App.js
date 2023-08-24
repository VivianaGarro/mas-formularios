import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import validator from 'validator';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [hizoSubmit, setHizoSubmit] = useState(false);
  
  const [errorFirstName, setErrorFirstName] = useState('')
  const [errorLastName, setErrorLastName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  
  const crearUsuario = (e) => {
    e.preventDeafult();
    const nuevoUsuario = {firstName, lastName, email};
    console.log(nuevoUsuario);
    setFirstName("");
    setLastName("");
    setEmail("");
    setHizoSubmit(true);
  }



  const initialState = {
    firstName: {value: '', error: null},
    lastName: {value: '', error: null},
    email: {value: '', error: null}
    };
    

  const handleErrorFirstName = (e) =>{
    setFirstName(e);
    if(e.length < 2){
      if(e == ''){
        setErrorFirstName('');
      }
      else if(e.length < 2){
        setErrorFirstName('First name must be at least 2 characters');
      }
    }
    else{
      setErrorFirstName('');
    }
  }
  const handleErrorLastName = (e) =>{
    setLastName(e);
    if(e.length < 2){
      if(e==''){
        setErrorLastName('');
      }
      else if( e.length < 2){
        setErrorLastName('Last name must be at least 2 characters');
      }
    }
    else{
      setErrorLastName('');
    }
  }
  
  const handleErrorEmail = (e) => {
    setEmail(e);
  
    if (validator.isEmail(email)) {
      setErrorEmail('Email válido:)')
    } else {
      setErrorEmail('Ingresa un Email válido!')
    }
  }

  return (
    <div>
      <h1>Formulario</h1>
      <h5>
        {hizoSubmit ? "Gracias poringresar tus datos!" : "Favor de ingresar tus datos"}
      </h5>
      <form>
        <div>
          <label>Nombre: </label>
          <input type='text' name='firstName' onChange={(e) => handleErrorFirstName(e.target.value)}/>
          <p>{errorFirstName}</p>
        </div>

        <div>
          <label>Apellido: </label>
          <input type='text' name='lastName' onChange={(e) => handleErrorLastName(e.target.value)}/>
          <p>{errorLastName}</p>
        </div>

        <div>
          <label>Email: </label>
          <input type='text' name='email' onChange={(e) => handleErrorEmail(e.target.value)}/>
          <p>{errorEmail}</p>
        </div>
        <input type="submit" className="btn btn-success" value="Crear Usuario" />

      </form>
      
    </div>
  );
}

export default App;
