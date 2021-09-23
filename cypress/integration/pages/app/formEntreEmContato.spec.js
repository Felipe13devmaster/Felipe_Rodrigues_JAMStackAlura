/* eslint-disable no-undef */
/// <reference types="cypress" />

import EntreEmContatoModalScreenPageObject from '../../../../src/components/screens/mocks/app/EntreEmContatoModal/EntreEmContatoModal.pageObject';

describe('/pages/app/modal', () => {
  it('preencha os campos do formulário entre em contato', () => {
    cy.intercept('https://felipe-rodrigues-jam-stack-alura.vercel.app/api/postarMensagem')// intercepta a requisição para o endpoint informado.
      .as('userContato');// Alias

    const EntreEmContatoModal = new EntreEmContatoModalScreenPageObject(cy);
    EntreEmContatoModal.preencherCampos({ name: 'omariosouto', email: 'teste@exemplo.com', mensagem: 'Ola' });
    EntreEmContatoModal.submit();
    // clicar no botão de entre em contato
    // preencher campo do nome
    // preencher campo do email
    // preencher campo da mensagem
    // clicar no botão de enviar
  });
});
