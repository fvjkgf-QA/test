describe('Проверка авторизации', function () {

it('Верный пароль и логин', function () {
    cy.visit('https://dev2.getinfo.radugi.net/login?redirect=/');
    cy.get('#sdo-login').type('dumbledore@sct.team');
    cy.get('#sdo-password').type('12345678qQ1');
    cy.get('.el-button--primary').click();
    cy.get('[data-cy="submenu-ms-education-center"] > .el-sub-menu__title').click();
    cy.get(':nth-child(1) > [data-cy="router-link-Company"]').click();
    cy.visit('https://dev2.getinfo.radugi.net/user/c5c03c04-d6a7-4785-bde8-eab6457dd5f6');
    cy.get('.normal-size > .description-value').contains('dumbledore@sct.team')
})
})
// успешный вход, доступ к странице