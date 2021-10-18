///<reference types="cypress" />


describe('Preview page tests', () => {

    before(() => {
        cy.visit('/posts/preview')
    })
    it('Preview page has expected page title', () => {


        cy.title().should('eq', 'Preview Mode for Static Generation | Next.js Blog Example with Markdown')
    })

    it('Preview page has expected title', () => {
        cy.get('h1')
        .contains('Preview Mode for Static Generation')

    })

    it('Preview Page has correct author and avatar', () => {
        cy.get('[data-testid="Joe Haddad"]')
                .should('contain.text', "Joe Haddad")
    
            cy.get('[data-testid="Joe Haddad"]')
                .find('img').should('have.attr', 'src').should('include', 'joe.jpeg')
    
        })

        it('Preview Page has expected picture', () => {
            cy.get('[data-testid="coverImg-undefined"]')
                .should('be.visible')
                .should('have.attr', 'src').should('include', 'preview%2Fcover.jpg')
    
        })

        it('Preview Page has correct timestamp', () => {
            cy.get('time')
            .contains('March 16, 2020')
    
        })

        it('Preview page has correct content', () => {
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