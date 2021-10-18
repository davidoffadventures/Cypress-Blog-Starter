# Cypress-blog-starter

Initial set up run

```
npm install
```

The repo includes the blog-starter-app. I've added my own changes to some components in the app to help access certain selectors for Cypress.

To launch the app in development run;

```
npm run dev
```

To launch the app in production run;

```
npm run build
npm start
```


Your blog should be up and running on http://localhost:3000! If it doesn't work, post on GitHub discussions.

# Install Cypress

Open a new terminal within VScode or command line within "blog-starter-app", then install Cypress framework along with the following useful testing libaries

```
npm install --save-dev cypress @cypress/react @cypress/webpack-dev-server @testing-library/cypress html-webpack-plugin webpack webpack-dev-server
```

# Run tests with native command line

To run all the End-2-End Cypress tests in the terminal enter;

```
npx cypress run --spec cypress/integration/e2e/*
```

# Run tests with reporter for HTML output

To run the End-2-End Cypress tests with HTML result output, run these commands;
The html report is located in "TestReport" in root.

```
npm run test:cli
npm run create:html:report
```

# Run tests manually with Cypress browser 

To open Cypress and manually select tests to view in browsers, run;

```
npx cypress open
```