export default function App() {
  const salarios = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]

  const salarioComAumento = salarios.map(
    salario => salario <= 2000 ?
    salario += salario * 0.15 :
    salario += salario * 0.1)
  console.log(salarioComAumento)

  const salarioSup2500 = salarioComAumento.filter(salario => salario > 2500)
  console.log(salarioSup2500)

  const salarioSoma = salarioSup2500.reduce((acumulado, salario) => {return acumulado + salario})
  console.log(salarioSoma)

  return(
    <>
      <p>Olá, mundo!</p>
      <p>Bom dia!</p>

      <h2>Salários com aumento:</h2>
      <ul>
        {salarioComAumento.map((salario, index) =>
          <li key={index}>{salario}</li>
        )}
      </ul>
    </>
  )
}