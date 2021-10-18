///<reference types="cypress" />


describe('Hello World page tests', () => {

    before(() => {
        cy.visit('/posts/hello-world')
    })
    it('Hello World page has expected page title', () => {


        cy.title().should('eq', 'Learn How to Pre-render Pages Using Static Generation with Next.js | Next.js Blog Example with Markdown')
    })

    it('Hello World has expected title', () => {
        cy.get('h1')
        .contains('Learn How to Pre-render Pages Using Static Generation with Next.js')

    })

    it('Hello World Page has correct author and avatar', () => {
        cy.get('[data-testid="Tim Neutkens"]')
                .should('contain.text', "Tim Neutkens")
    
            cy.get('[data-testid="Tim Neutkens"]')
                .find('img').should('have.attr', 'src').should('include', 'tim.jpeg')
    
        })

        it('Hello World Page has expected picture', () => {
            cy.get('[data-testid="coverImg-undefined"]')
                .should('be.visible')
                .should('have.attr', 'src').should('include', 'hello-world%2Fcover.jpg')
    
        })

        it('Hello WorldPage has correct timestamp', () => {
            cy.get('time')
            .contains('March 16, 2020')
    
    
        })

        it('Hello World page has correct content', () => {
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