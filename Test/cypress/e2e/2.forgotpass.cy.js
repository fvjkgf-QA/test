describe('Восстановление пароля', function () {

it('Верный пароль и логин', function () {
    cy.visit('https://dev2.getinfo.radugi.net/login?redirect=/');
    cy.get('.is-link > span').click();
    cy.get('input').type('dumbledore@sct.team');
    cy.get('.el-button--primary').click();
})
})
// восстановить пароль