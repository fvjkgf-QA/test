describe('Проверка авторизации', function () {

it('Верный пароль и логин', function () {
    cy.visit('https://dev2.getinfo.radugi.net/login?redirect=/');
    cy.get('#sdo-login').type('dumbledore@sct.team');
    cy.get('#sdo-password').type('12345611221212');
    cy.get('.el-button--primary').click();
    
})
})
// некорректный пароль