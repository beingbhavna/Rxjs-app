import * as mockData from '../data/credentials.js';
describe('template spec', () => {
  it('clicking "type" navigates to a new url', () => {
    //Rxjs-app

    // cy.visit('http://localhost:4200')
    // cy.contains('Promise').click()
    // cy.contains('Promise Click').click()
    // // cy.url().should('include', 'async-await')
    // cy.visit('http://localhost:4200/async-await')
    // cy.contains('Async/Await').click()
    // cy.contains('Buy Laptop').click()
    // cy.contains('Buy Laptop1').click()
    // cy.contains('Buy Laptop2').click()
    // cy.visit('http://localhost:4200/observables')
    // cy.contains('Custom Observables').click()

    //candidate-portal-app

// Cypress.Commands.add('login', (username, password) => {
//   cy.session(
//     username,
//     () => {
//       cy.visit('/login')
//       mockData.forEach((e) => {
//         cy.get('input[name=username]').type(e.username)
//         cy.get('input[name=password]').type(`${e.password}{enter}`, { log: false })
//         cy.url().should('include', '/dashboard')
//         cy.get('h1').should('contain', username)
//       })
//     },
//     {
//       validate: () => {
//         cy.getCookie('your-session-cookie').should('exist')
//       },
//     }
//   )
// })


// console.log(mockData);

    cy.visit('http://localhost:4300');
    mockData.credetials.forEach((e) => {
    cy.get('input[name=username]').type(e.username)
    cy.get('input[name=password]').type(`${e.password}{enter}`)
    cy.wait(200)

    cy.get('#view-admitcard').click()
    cy.wait(100)
    // cy.get('#examDropdown').select(1).should('have.value', '#examDropdown')
    // cy.get('select').should('be.visible').select('OptionName', {force: true})
    // cy.get('select').select([0, 1]).invoke('val').should('deep.equal', ['Paper I', 'Paper II'])
    for(let i=0;i<=2;i++){
      cy.get('select').select(i)
      cy.wait(10000)
      console.log(i)
    }
    // cy.get('#view-admitcard').as('closeBtn')
    // cy.get('@closeBtn').click({ force: true })
    cy.get('#app-logout').click()
  })
  })
})