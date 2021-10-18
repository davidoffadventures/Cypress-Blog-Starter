///<reference types="cypress" />


describe('Dynamic routing page tests', () => {

    before(() => {
        cy.visit('/posts/dynamic-routing')
    })
    it('Dynamic routing has expected page title', () => {


        cy.title().should('eq', 'Dynamic Routing and Static Generation | Next.js Blog Example with Markdown')
    })

    it('Dynamic Page has expected title', () => {
        cy.get('h1')
        .contains('Dynamic Routing and Static Generation')

    })

    it('Dynamic Page has correct author and avatar', () => {
    cy.get('[data-testid="JJ Kasper"]')
            .should('contain.text', "JJ Kasper")

        cy.get('[data-testid="JJ Kasper"]')
            .find('img').should('have.attr', 'src').should('include', 'jj.jpeg')

    })

    it('Dynamic Page has expected picture', () => {
        cy.get('[data-testid="coverImg-undefined"]')
            .should('be.visible')
            .should('have.attr', 'src').should('include', 'dynamic-routing%2Fcover.jpg')

    })

    it('Dynamic Page has correct timestamp', () => {
        cy.get('time')
        .contains('March 16, 2020')


    })

    it('Dynamic page has correct content', () => {
        cy.get('p')
        .contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus. Praesent elementum facilisis leo vel fringilla. Congue mauris rhoncus aenean vel. Egestas sed tempus urna et pharetra pharetra massa massa ultricies.')

        cy.get('h2')
        .contains('Lorem Ipsum')

    })

    it("Footer title is correct", () => {

        cy.get('[data-testid="footer"]')
        .contains('Statically Generated with Next.js.')

    })



})