import NewSurveyPage from "./newSurvey.page"

class ProjectsPage {
    
    constructor() {
        this.newSurvey = new NewSurveyPage
    }
    
    elements = {
        getCreateNewProjectBtn : () => cy.xpath('//button[text() = "Create new project"]'),
        getNewProjectTitle : () => cy.xpath('//input[@aria-label="Project title"]'),
        getCreateNewProjectSubmit : () => cy.xpath('//div[text() = "Create new project"]')
    }

    createNewProject(projectTitle) {
        this.elements.getCreateNewProjectBtn().click()
        this.elements.getNewProjectTitle().should("be.visible").type(projectTitle)
        this.elements.getCreateNewProjectSubmit().click()
        this.newSurvey.elements.getToSurveyBtn().should("be.visible")
    }
}

export default ProjectsPage