# &#x1F4CC; React Boilerplate 02

## Description

Most basic react boilerplate app.

## Creation

### Terminal commands

```
# Auto-generate package.json with default values
yarn init -y

# Add packages
yarn add express

yarn add react
yarn add react react-dom
yarn add --dev @babel/preset-react
yarn add --dev @babel/core

yarn add --dev @babel/cli": "^7.0.0",
yarn add --dev @babel/core": "^7.0.0",
yarn add --dev @babel/preset-react":

yarn add esbuild --dev
```

### Manually create:

- src/
- src/index.html
- src/index.js

## Build &amp; Run

```
yarn build
node server.js
```

The build creates dist/

- index.html - created from generate-html.js
- index.js - created by esbuild with babel

Go to `localhost:6411` in your browser

## Notes - package.json

ES modules in Node.js (import instead of require)<br/>`"type": "module"`

"scripts":<br/>
Use Babel to convert React to JavaScript, and generate an index.html page with an app root element.<br/>
`"build": "babel src -d dist && node generate-html.js"`

"dependencies":<br/>
JSX and React Components structure<br/>
`"react": "^19.0.0"`<br/>
Rendering components to the DOM<br/>
`"react-dom": "^19.0.0"`

"devDependencies":<br/>
The main Babel engine that processes the code.<br/>
`"@babel/core": "^7.0.0"`<br/>
Command-line interface to run Babel commands (like babel index.jsx).<br/>
`"@babel/cli": "^7.0.0"`<br/>
A set of transformations specifically for JSX/React code (converts JSX into JavaScript)<br/>
`"@babel/preset-react": "^7.0.0"`<br/>
A fast JavaScript bundler and minifier written in Go.<br/>
`"esbuild": "^0.25.1"`

<br/>
<br/>

[ Back to main ⤵️ ](../README.md)
