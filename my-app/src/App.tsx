
export default function App(){
//area de declaração

//criando um array com 10 salarios
const salarios = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

//atribuindo aumento de 15% para salarios até 2k
const salComAumento = salarios.map(salario => salario <= 2000 ? salario * 1.15 : salario * 1.10)
console.log(salComAumento)

const salSup2500 = salComAumento.filter(salario => salario > 2500)
console.log(salSup2500)

const somaSal = salSup2500.reduce((acumulado, salario)=> {return (acumulado + salario)}, 0);
console.log(somaSal);

  return (
    <>{/* -> fragment */}
      <p>ola mundo</p>
      <p>bom dia</p>

    <h2>Salarios com aumento</h2>
    <ul>
      {salComAumento.map((salario,i)=>(
        <li key={i}>{salario}</li>
      ))}
    </ul>
    </>
  )
}