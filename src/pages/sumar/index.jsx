import logo from "../../logo.svg";
import { useState } from "react";
import Parrafo from "./components/suma";


const Sumar = () => {
    let persona = {
      name : "Deiby", 
      age : 16,
    }
  const [newPersona, setNewPersona] = useState(persona);

  const sumar = () => {
    const newpersona = {
      ...newPersona, 
      age: newPersona.age + 1
    };
    setNewPersona(newpersona);
  };
  const restar = () => {
    const newpersona = {
      ...newPersona, 
      age: newPersona.age - 1
    };
    setNewPersona(newpersona);
  };

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Parrafo name={newPersona.name} age={newPersona.age} />
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
      </div>
    </div>
  );
};

export default Sumar;