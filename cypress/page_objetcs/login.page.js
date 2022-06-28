import ProjectsPage from "./projects.page"


class LoginPage {

    constructor() {
        this.projects = new ProjectsPage
    }
    elements = {

        getEmailInput : () => {
            return cy.get('input[type="text"]', { timeout: 10000 }).should("be.visible")
        },
        getPasswordInput: () => {
            return cy.get('input[type="password"]')
        },
        getLoginBtn: () => {
            return cy.get('button[type="submit"]')
        }
    }

    doLogin() {
        this.elements.getEmailInput().type(Cypress.env("email"))
        this.elements.getPasswordInput().type(Cypress.env("password"))
        this.elements.getLoginBtn().click()
        this.projects.elements.getCreateNewProjectBtn().should("be.visible")
    }
}

export default LoginPage