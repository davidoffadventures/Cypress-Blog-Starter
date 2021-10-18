///<reference types="cypress" />


describe('Home page tests', () => {

    before(() => {
        cy.visit('/')
    })

    it('Home page has expected page title', () => {


        cy.title().should('eq', 'Next.js Blog Example with Markdown')
    })

    it('Home page has expected main and sub title', () => {

        cy.get('[data-testid="introH1"]').should('have.text', 'Blog.')
        cy.contains('[data-testid="introH4"]', 'A statically generated blog example using')

    })


    it("Intro has expected title and link is defined", () => {
        cy.get('[data-testid="introH4"]')
            .should('have.text', 'A statically generated blog example using Next.js and Markdown.')
            .find('.link')
            .and('have.attr', 'href')
            .and('include', 'https://nextjs.org/')

    })

    it("Hero post has expected picture and link is defined", () => {
        cy.get('[data-testid="coverImg-dynamic-routing"]')
            .should('be.visible')
            .should('have.attr', 'src').should('include', 'dynamic-routing%2Fcover.jpg')

        cy.get('[data-testid="heroClass"]')
            .find('a')
            .and('have.attr', 'href')
            .and('include', '/posts/dynamic-routing')



    })


    it("Hero post has expected title and link is defined", () => {
        cy.get('[data-testid="heroPostH3"]')
            .should('have.text', 'Dynamic Routing and Static Generation')
            .find('.link')
            .invoke('attr', 'href')
            .should('eq', '/posts/dynamic-routing')


    })

    it("Hero post has expected content", () => {
        cy.get('[data-testid="heroPostText"]')
            .should('have.text', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.")
    })

    it("Hero post has correct author and avatar", () => {
        cy.get('[data-testid="JJ Kasper"]')
            .should('contain.text', "JJ Kasper")

        cy.get('[data-testid="JJ Kasper"]')
            .find('img').should('have.attr', 'src').should('include', 'jj.jpeg')


    })

    it("Hero post has correct time stamp", () => {
        cy.get('[data-testid="heroTimeStamp"]')
            .find('time')
            .should('contain', "March	16, 2020")


    })




})

describe('More Stories tests', () => {

    before(() => {
        cy.visit('/')
    })

    it('More Stories has expected title', () => {

        cy.get('[data-testid="msH2"]').should('have.text', 'More Stories')

    })

    it("Hello world post has expected picture and link is defined", () => {


        // cy.get('[data-testid="coverImg-hello-world"]')
        // //.should('be.visible')
        // .should('have.attr', 'src')
        // .and('include', 'hello-world%2Fcover.jpg')

        cy.get('[data-testid="coverLink-hello-world"]')

            .and('have.attr', 'href')
            .and('include', '/posts/hello-world')


    })

    it("Hello world post has expected title and link is defined", () => {
        cy.get('[data-testid="link-hello-world"]')
            .contains('Learn How to Pre-render Pages Using Static Generation with Next.js')


        cy.get('[data-testid="link-hello-world"]')
            .should('have.attr', 'href')
            .and('include', '/posts/hello-world')


    })

    it('Hello world post has timestamp', () => {

        cy.get('[data-testid="time-hello-world"]')
            .find('time')
            .should('contain', "March	16, 2020")


    })

    it("Hello world post content is correct", () => {
        
        cy.get('[data-testid="content-hello-world"]')
        .contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.')

    })
    

    it("Hello world post has correct author and avatar", () => {
        cy.get('[data-testid="Tim Neutkens"]')
            .should('contain.text', "Tim Neutkens")

        cy.get('[data-testid="Tim Neutkens"]')
            .find('img').should('have.attr', 'src').should('include', 'tim.jpeg')
    })

    it("Preview post has expected picture and link is defined", () => {


        // cy.get('[data-testid="coverImg-preview"]')
        // .should('be.visible')
        // .and('have.attr', 'src').should('include', 'preview%2Fcover.jpg')

        cy.get('[data-testid="coverLink-preview"]')

            .and('have.attr', 'href')
            .and('include', '/posts/preview')


    })

    it("Preview post has expected title and link is defined", () => {
        cy.get('[data-testid="link-preview"]')
            .contains('Preview Mode for Static Generation')


        cy.get('[data-testid="link-preview"]')
            .should('have.attr', 'href')
            .and('include', '/posts/preview')


    })

    it('Preview post has timestamp', () => {

        cy.get('[data-testid="time-preview"]')
            .find('time')
            .should('contain', "March	16, 2020")


    })

    it("Preview post content is correct", () => {
        
        cy.get('[data-testid="content-preview"]')
        .contains('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.')

    })

    it("Preview post has correct author and avatar", () => {
        cy.get('[data-testid="Joe Haddad"]')
            .should('contain.text', "Joe Haddad")

        cy.get('[data-testid="Joe Haddad"]')
            .find('img').should('have.attr', 'src').should('include', 'joe.jpeg')
    })

    describe('Footer tests', () => {

        it("Footer title is correct", () => {

            cy.get('[data-testid="footer"]')
            .contains('Statically Generated with Next.js.')

        })

    })


})