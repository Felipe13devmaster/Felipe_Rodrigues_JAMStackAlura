/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
const SobreMimPage = ({ repositorios }) => {
  console.log(repositorios);
  return (
    <div>
      {repositorios.map((repositorio) => (
        <li>{repositorio.name}</li>
      ))}
    </div>
  );
};

export async function getStaticProps() { // renderizando o conteudo estatico no servidor
  const repositorios = await fetch('https://api.github.com/users/Felipe13devmaster/repos')
    .then((res) => res.json());
  return {
    props: { repositorios },
  };
}

export default SobreMimPage;
