export default function App() {
  const salarios = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]
  const salarioComDesconto = salarios.map(
    salario => salario <= 2000 ?
    salario += salario * 0.15 :
    salario += salario * 0.1)

  console.log(salarioComDesconto)

  return(
    <>
      <p>Olá, mundo!</p>
      <p>Bom dia!</p>
    </>
  )
}