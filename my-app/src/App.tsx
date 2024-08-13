

export default function App(){
//Area declarativa
//Criando um array com 10 salários
const salarios = [1000,2000,3000,4000,5000,6000,1500,1800,2200,3600]


//Atribuindo um aumento de 15% para salario até 2000 e um aumento de 10% para salarios acima de 2000.
const salComAumento = salarios.map(salario => salario<= 2000 ? salario+(salario * 0.15) : salario+(salario * 0.10));
console.log(salComAumento)

//Filtrando Salarios acima de 2500
const salMaior2500 = salComAumento.filter(salario => salario > 2500);
console.log(salMaior2500);

//Somando os salarios
const salSoma = salMaior2500.reduce((acumulado,salario)=>{return(acumulado+salario)},0)
console.log(salSoma)

  return( 
    <>{/*Fragment*/}
      <p>Olá Mundo</p>
      <p>Bom dia</p>

      <h2>Salários com aumentos</h2>
      <ul>
        {salComAumento.map((salario,i)=>(
          <li key={i}>{salario}</li>
        ))}
      </ul>
    </>
  );
}