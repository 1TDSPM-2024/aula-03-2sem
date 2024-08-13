export default function App() {
  const salarios = [1000, 1500, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

  const aumento = salarios.map((salario) =>
    salario <= 2000 ? salario + salario * 0.15 : salario + salario * 0.1
  );
  console.log(aumento);

  const salSupDoisEQuinhentos = aumento.filter((salario) => salario > 2500);
  console.log(salSupDoisEQuinhentos);

  const salSoma = salSupDoisEQuinhentos.reduce((acumulado, salario) => {
    return acumulado + salario;
  }, 0);
  console.log(salSoma);

  return (
    <>
      {/*Fragment*/}
      <p>Olá, mundo!</p>
      <p>Bom dia</p>

      <h2>Salários com aumento</h2>
      <ul>
        {aumento.map((salario, i) => (
          <li key={i}>{salario}</li>
        ))}
      </ul>
    </>
  );
}
