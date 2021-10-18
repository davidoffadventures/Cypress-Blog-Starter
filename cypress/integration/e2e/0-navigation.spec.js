///<reference types="cypress" />


describe('Checks all links are active and correct page loaded', () => {

    it('Links have hrefs and return status 200', () => {

        cy.visit('/')
        cy.get('a').each(page => {
            cy.request(page.prop('href'))
                .its('status')
                .should('eq', 200);
        })


    });

    it('Clicks "next.js" link', () => {

        cy.contains('Next.js').click()
        cy.url().should('eq', 'https://nextjs.org/')
        cy.go('back')

    })

    it('Clicks "dynamic-routing" link', () => {

        cy.contains('Dynamic Routing and Static Generation').click()
        cy.location('pathname').should('eq', '/posts/dynamic-routing')
        

        cy.contains('Blog').click()
        cy.url().should('eq', 'http://localhost:3000/')


    })

    it('Clicks "hello-world" link', () => {


        cy.contains('Learn How to Pre-render Pages').click()
        cy.location('pathname').should('eq', '/posts/hello-world')
        

        cy.contains('Blog').click()
        cy.url().should('eq', 'http://localhost:3000/')


    })

    it('Clicks "preview" link', () => {
        

        cy.contains('Preview Mode for Static Generation').click()
        cy.location('pathname').should('eq', '/posts/preview')
       

        cy.contains('Blog').click()
        cy.url().should('eq', 'http://localhost:3000/')


    })



})




