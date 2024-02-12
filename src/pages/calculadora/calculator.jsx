import logo from "../../logo.svg";
import { useState } from "react";

const Calculator = () => {
    const [resultado] = useState();
    const [numb1, setNumb1] = useState(0);
    const [numb2, setNumb2] = useState(0);

    const handleNum1 = (evento) => {
        let numero1 = evento.target.value;
        let num1 = parseInt(numero1);
        setNumb1(num1);
    };
    
    const handleNum2 = (evento) => {
        let numero2 = evento.target.value;
        let num2 = parseInt(numero2);
        setNumb2(num2);
        
    };
    const sumar = () => { 
        let suma = numb1 + numb2;
        console.log(suma);
    };
    const restar = () => {
        let resta = numb1 - numb2;
        console.log(resta);
    };
    const multiplicar = () => {
        let multiplicacion = numb1 * numb2;
        console.log(multiplicacion);
    };
    const dividir = () => {
        let division = numb1 / numb2;
        console.log(division);
    };
    return (
    <div className="App">
    <textarea type="text" placeholder="numero 1"  name="numero1" onChange={handleNum1}/>
    <textarea type="text" placeholder="numero 2" name="numero2" onChange={handleNum2}/>
    <textarea type="text" placeholder="resultado" value={resultado} name="resultado" onChange={handleNum2}/>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={multiplicar}>Multiplicar</button>
        <button onClick={dividir}>Dividir</button>
    </div>
    );
};

export default Calculator;