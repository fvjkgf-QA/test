describe('Проверка авторизации', function () {

it('Верный пароль и логин', function () {
    cy.visit('https://dev2.getinfo.radugi.net/login?redirect=/');
    cy.get('.is-link > span').click();
    
})
})