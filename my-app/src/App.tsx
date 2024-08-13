import "./App.css"
export default function App() {

  const salarios = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

  const salComAumento = salarios.map(salario => salario <= 2000 ? salario+(salario * 0.15) : salario+(salario*0.10));

  console.log(salComAumento);

  const salSup2500 = salComAumento.filter(salario => salario > 2500);

  console.log(salSup2500);

  const salSoma = salSup2500.reduce((acumulado,salario)=> {return (acumulado+salario)},0);

  console.log(salSoma);


  return (
    <>
    <p>Olá Mundo</p>
    <p>Bom DIa</p>


    <h2>Salários com Aumento</h2>
    <ul>
      {salComAumento.map((salario,i)=>(<li key={i}>{salario}</li>))}
    </ul>





    </>

  )
}