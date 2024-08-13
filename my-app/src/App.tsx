export default function App(){

const salarios = [
  1000,
  2000,
  1500,
  2500,
  1254,
  5903,
  8000,
  1112,
  2122,
  1010
];

const aumento = salarios.map(salario => salario <= 2000 ? salario * 1.15 : salario * 1.10)
console.log (aumento)
const salSup2500 = aumento.filter(salario=> salario > 2500);
console.log(salSup2500);

const salSoma = salSup2500.reduce((acumulado, salario) => {return(acumulado+salario)},0);
console.log(salSoma)


  return (
  <div>
      <p>Olá Mundo!</p>
      <p>Bom dia</p>
      <h2>Salários</h2>
      <ul>{salarios}</ul>
      <h2>Salários com aumento</h2>
      <ul>
        {aumento.map(salario=>(
          <li>{salario}</li>
        ))}
      </ul>
    </div>
  );
  
}