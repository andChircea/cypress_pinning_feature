class NewSurveyPage {

    
    elements = {
        // CSS pointer-events: none, inherited:
        getToSurveyBtn : () => cy.wait(3000).cy.get('.mui-cache-13tqxrv'),
        getAddQuestionBtn : () => cy.xpath('//button[@aria-label = "Add"]'),
        getSelectQuestionType : (text) => cy.xpath(`//div[contains(@class, "MuiPaper-root") and not(contains(@style, "visibility: hidden"))]//li[@role="menuitem"]//p[text()="${text}"]`),

        getAllQuestionBlocks : () => cy.xpath('//div[contains(@name, "scroll-id")]//*[contains(@class, "MuiPaper-elevation")]'),
        getQuestionBlock : (index) => cy.get(`name="scroll-id-${index}"`),
        getQuestionTitle : (index) => getQuestionBlock(index).find('aria-label="Basic question header input"'),
        getResponseBlock : (index) => getQuestionBlock(index).xpath('//input[contains(@placeholder, "Type an option")]/parent::*'),
    
    }

    goToSurvey() {
        this.elements.getToSurveyBtn().should("be.visible").click()
        this.elements.getAddQuestionBtn().should("be.visible")
    }

    addNewQuestion (questionType) {
        this.elements.getAddQuestionBtn().first().should("be.visible").click()
        this.elements.getSelectQuestionType(questionType).should("be.visible").click()
        this.elements.getAllQuestionBlocks().should("be.visible")
    }
}

export default NewSurveyPage