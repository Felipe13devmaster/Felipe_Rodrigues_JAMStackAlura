export default class EntreEmContatoModalScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/');
    this.cy.get('button[id="entreEmContato"]').click();
  }

  preencherCampos({ name, email, mensagem }) {
    this.cy.get('#formContato input[name="nome"]').type(name);
    this.cy.get('#formContato input[name="email"]').type(email);
    this.cy.get('#formContato textarea[name="mensagem"]').type(mensagem);

    return this;
  }

  submit() {
    this.cy.get('#formContato button[type="submit"]').click();

    return this;
  }
}
