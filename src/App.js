import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import validator from 'validator';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const [errorFirstName, setErrorFirstName] = useState('')
  const [errorLastName, setErrorLastName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

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
      setErrorEmail('Valid Email :)')
    } else {
      setErrorEmail('Enter valid Email!')
    }
  }

  const handleErrorPassword = (e) =>{
    setPassword(e);
    if(e.length < 8){
      if(e == ''){
        setErrorPassword('');
      }
      else{
        setErrorPassword('La contraseña debe tener al menos 8 caracteres');
      }
    }
    else{
      setErrorPassword('');
    }
  }

  const handleErrorPasswordConfirmation = (e) =>{
    setPasswordConfirm(e);
    if(e.length < 8){
      if(e == ''){
        setErrorConfirmPassword('');
      }
      else{
        setErrorConfirmPassword('La contraseña debe tener al menos 8 caracteres');
      }
    }
    else if(password != e){
      setErrorConfirmPassword('Las contraseñas deben coincidir');
    }
    else{
      setErrorConfirmPassword('');
    }
  }

  return (
    <div>
      <h1>Formulario</h1>
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

        <div>
          <label>Contraseña: </label>
          <input type='password' name='password' onChange={(e) => handleErrorPassword(e.target.value)}></input>
          <p>{errorPassword}</p>
        </div>

        <div>
          <label>Confirme contraseña: </label>
          <input type='password' name='passwordConfirm' onChange={(e) => handleErrorPasswordConfirmation(e.target.value)}></input>
          <p>{errorConfirmPassword}</p>
        </div>
      </form>
      
    </div>
  );
}

export default App;
