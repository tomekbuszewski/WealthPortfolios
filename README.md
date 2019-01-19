# Wealth Portfolios

## Live version available at [tb-wealthportfolios.surge.sh](http://tb-wealthportfolios.surge.sh/)

## Description
Simple client-side SPA built with [React](https://reactjs.org/).

It fetches portfolios from given API and lists them. Then, after selecting one, fetches details and allows for modifications (although, even when receiving 200, changes are not reflected). Also allows for creating new entries in separate view (but they will disappear after awhile).

## Technical description
Application is built using React alongside [React Router](https://reacttraining.com/react-router/) for routing, [React Helmet](https://github.com/nfl/react-helmet) for `<head>` management (title only) and [Axios](https://github.com/axios/axios) for API communication. I didn't use any app-wide state management tool like Redux. It would be redundant.

For styling I've used [Bulma](https://bulma.io) and [Styled Components](http://styled-components.com/) when needed. I've chosen this set, because Bulma is quite appealing and provides a lot of components. Styled, on the other hand, provides nice CSS-like features, while still being CSS-in-JS–based solution.

I didn't extract my styles to a separate file, because this is an SPA and user experience will be better without the necessity to wait for it to fetch (blocking in `head`). Vendor CSS, which takes care of 99% of styling is loaded from CDN.

Apart from this, I've used [Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) for testing and [Webpack](https://webpack.js.org/) with [Dev Server](https://github.com/webpack/webpack-dev-server) for development.

I've used vanilla JavaScript ES2015+, without Flow or TypeScript.

### Note on testing
This is extremely simple application, so I really didn't feel like writing tests for everything. Plus, I believe that testing vendors is redundant. I wouldn't choose that vendor if I weren't sure about its quality. 

## Building
To build this project, simply run `yarn build:prod` and it will generate files in `public` directory. They can be either run via external server (to use `public` as a root directory) or deployed. 

Vendors are carried out to a separate file, build is done with production flags with hashes, default surge.sh server has gzipping enabled (user has to be logged in to deploy).

## Development
Using `yarn devserver` will spawn a Webpack Dev Server instance on `http://localhost:8080`. 

This project uses [React Hot Loader](https://github.com/gaearon/react-hot-loader), but no Storybook (not enough styling to this having a valid point).