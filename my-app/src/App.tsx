
export default function App(){
  //Área declarativa
  //Criando um array com 10 salarios
  const salarios = [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000];

  //Atribuindo um aumento de 15% para salários até 2000 e um aumento de 10% para acima de 2000
  //ex-1
  const slaComAumento = salarios.map(salario => salario <= 2000 ? salario+(salario * 0.15) : salario+(salario * 0.10));

  console.log(slaComAumento);

  // ex-2
  const salSup2500 = slaComAumento.filter(salario=> salario > 2500);
  console.log(salSup2500);

  //ex-3
  const salSoma = salSup2500.reduce((acumulado,salario)=> {return(acumulado+salario)},0);
  console.log(salSoma);



  return(
    <>{/*Fragment*/}
    <p>Olá Mundo!</p>
    <p>Bom dia</p>

    <h2>Sálarios com Aumento</h2>
    <ul>
      {slaComAumento.map((salario,i)=>(
        <li key={i}>{salario}</li>
      ))}
    </ul>

    </>
  );
}
