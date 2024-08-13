

export default function App() {
//Area declarativa
//Criando um array com 10 salários
const salarios = [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000];

//Atribuindo um aumento de 15% para salário até 2000 e um aumento de 10% para salários acima de 2000.
const salComAumento = salarios.map(salario => salario <= 2000 ? salario+(salario * 0.15) : salario+(salario * 0.10));
console.log(salComAumento);

const salSup2500 = salComAumento.filter(salario => salario > 2500);
console.log(salSup2500);

const salSoma = salSup2500.reduce((acumulando,salario)=> {return (acumulando+salario)},0);
console.log(salSoma);

    return ( 
      <> {/*Fragment*/}
      <p>Olá mundo!</p>
      <p>bom dia</p>

      <h2>Salários com aumento</h2>
      <ul>
        {salComAumento.map((salario,i)=>(
          <li>key={i},{salario}</li>
        ))}
      </ul>


      </>
    );
}


export default function App() {
//Área declarativa
//Criando um array com 10 salários
const salarios = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000
];

//Atribuindo um aumento de 15% para sálarios até 2000 e um aumento de 10% para sálarios acima de 2000
const salComAumento = salarios.map(salario => salario <= 2000 ? salario+(salario * 0.15) : salario+(salario * 0.10));
console.log(salComAumento)

const salSup2500 = salComAumento.filter(salario=> salario > 2500);
console.log(salSup2500)

const SalSoma = salSup2500.reduce((acumulado,salario)=> {return (acumulado+salario)},0);
console.log(SalSoma)

  return(
    <>{/*Fragment*/}
      <p>Olá Mundo!</p>
      <p>Bom dia</p>

    <h2>Salários com aumento</h2>
    <ul>
      {salComAumento.map((salario,i)=>(
        <li key={i}>{salario}</li>
      ))}
    </ul>
    </>
  );
}

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
