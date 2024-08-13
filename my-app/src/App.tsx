
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