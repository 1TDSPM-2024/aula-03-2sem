export default function App() {
  // Área declarativa

  const salarios = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
  
  // aumento de 15% até 2000 e 10% acima de 2000
  const salariosComAumento = salarios.map(salario => salario <= 2000 ? salario * 1.15 : salario * 1.1)
  console.log(salariosComAumento)

  // somente salários acima de 2500
  const salariosAcima2500 = salariosComAumento.filter(salario => salario > 2500)
  console.log(salariosAcima2500)

  // soma dos salários acima de 2500
  const salariosSoma = salariosAcima2500.reduce((soma, salario) => soma + salario, 0)
  console.log(salariosSoma)

  return(
    <> {/*Fragment*/}
      <h1>Olá Mundo!</h1>
      
      <h2>Salários com aumentos</h2>
      <ul>
        {salariosComAumento.map((salario, i) => (
          <li key={i}>{salario}</li>
        ))}
      </ul>
    </>
  )
}