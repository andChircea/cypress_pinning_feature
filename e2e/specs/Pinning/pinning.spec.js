import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ProjectsPage from "../../../cypress/page_objetcs/projects.page";
import NewSurveyPage from "../../../cypress/page_objetcs/newSurvey.page";
import LoginPage from "../../../cypress/page_objetcs/login.page";

const login = new LoginPage();
const projects = new ProjectsPage();
const newSurvey = new NewSurveyPage();

let questionTypes
let createdProject;

Given("The user is able to login and to create a new project", () => {
    cy.visit("/login");
    login.doLogin();
    createdProject = projects.createNewProject(`New Test ${Date().toLocaleString()}`);
    newSurvey.goToSurvey();
});

Given("The user goes to Survey and adds a new question type that can have Randomised responses", (table) => {
    questionTypes = table.hashes()
    questionTypes.forEach(type => {
        newSurvey.addNewQuestion(type.Types)
    });
});

When("The user is able to input a Question Title add 5 response options to each question block", () => {
    for(let i; i < questionTypes.length; i++){
        newSurvey.elements.getQuestionTitle(i).type(`Question${i}{enter}`)
        newSurvey.elements.getResponseBlock(i).each(($el, index) => {
            $el.type(`ResponseNumber${index}`)
        })
    }
})

