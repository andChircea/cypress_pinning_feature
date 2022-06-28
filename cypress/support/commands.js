import axios from "axios";

Cypress.Commands.add("login", () => {
    axios
        .post(Cypress.env("apiURL") + "login", {
            emailAddress: Cypress.env("email"),
            password: Cypress.env("password"),
        })
        .then((resp) => {
            const responseUser = resp.data;
            window.localStorage.setItem("access_token", responseUser.accessToken);
            window.localStorage.setItem("email", responseUser.emailAddress);
        })
        .catch((error) => {
            cy.log(error);
        });
});

