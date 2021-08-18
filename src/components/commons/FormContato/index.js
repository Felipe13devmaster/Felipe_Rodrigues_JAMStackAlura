import React from 'react';
import TextField from '../../foms/TextField';
import Box from '../../layout/Box';

const FormContent = () => {
  const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
  };
  const [isFormSubmited, setFormSubmited] = React.useState(false);
  const [submissionStatus, setsubmissionStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name'); // pega os inputs que tenham o atributo name
    setUserInfo({
      ...userInfo, // espalha tudo o que o objeto tinha antes e deseja manter aqui.
      [fieldName]: event.target.value,
    });
  };

  // eslint-disable-next-line max-len
  const isFormInvalid = userInfo.nome.length < 1 || userInfo.email.length < 1 || userInfo.mensagem.length < 1;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setFormSubmited(true);
        const userDTO = {
          name: userInfo.nome,
          email: userInfo.email,
          mensagem: userInfo.mensagem,
        };
        fetch('https://instalura-api.vercel.app/api/users',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDTO),
          })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Não foi possível cadastrar o email agora.');
          })
          .then((responseConvertidaEmObjeto) => {
            setsubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(responseConvertidaEmObjeto);
          })
          .catch((error) => {
            setsubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.log(error);
          });
      }}
    >
      <h1>
        ENVIE SUA MENSAGEM
      </h1>
      <div>
        <TextField
          placeholder="nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="mensagem"
          name="mensagem"
          value={userInfo.mensagem}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={isFormInvalid}
      >
        Cadastrar
      </button>
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <p>alguma coisa</p>
      )}
    </form>
  );
};

// eslint-disable-next-line react/prop-types
const FormContato = ({ propsDoModal }) => (
  <Box
    boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    flex={1}
    backgroundColor="white"
    padding={{
      xs: '16px',
      md: '85px',
    }}
          // eslint-disable-next-line react/jsx-props-no-spreading
    {...propsDoModal}
  >
    <FormContent />
  </Box>
);

export default FormContato;
